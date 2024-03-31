import { useState, MouseEvent } from "react";
import Image from "next/image";
import { dateDiffCalc, dateFormatter } from "@/lib/datecalc";
import iconEmptyLogo from "@/public/emptylogo.svg";
import kebab from "@/public/kebab.svg";
import star from "@/public/star.svg";
import styles from "./Card.module.css";
import SelectMenu from "./SelectMenu";
import DeleteLinkModal from "./modal/DeleteLinkModal";
import AddToFolderModal from "./modal/AddToFolderModal";
//type
import { Link, LinksData, MODAL } from "../types/commonTypes";

function Card({ link }: { link: Link | LinksData }) {
  const [isKebabClicked, setIsKebabClicked] = useState(false);
  const [currCardModal, setCurrCardModal] = useState<MODAL>(null);

  const cardImage =
    (link as Link).imageSource || (link as LinksData)["image_source"]
      ? (link as Link).imageSource || (link as LinksData)["image_source"]
      : iconEmptyLogo;
  const dateOfCard = new Date(
    (link as Link).createdAt || (link as LinksData)["created_at"]
  );
  const dateDiff = dateDiffCalc(dateOfCard);
  const formatDate = dateFormatter(dateOfCard);

  const onClickCard = () => {
    window.open(link.url, "_blank");
  };

  const onClickKebab = (e: MouseEvent) => {
    setIsKebabClicked((prevValue) => !prevValue);
    e.stopPropagation();
  };

  const handleClickModal = (value: MODAL) => {
    setCurrCardModal(value);
  };

  return (
    <>
      <div className={styles.container} onClick={onClickCard}>
        <div className={styles.imgContainer}>
          {/* TODO 넥스트 이미지로 바꾸기 오류가 있음 */}
          <img className={styles.img} src={cardImage} alt="이미지"></img>
        </div>
        <Image className={styles.star} src={star} alt="star" />
        <div className={styles.textContainer}>
          <div className={styles.dateDiffContainer}>
            <div>{dateDiff}</div>
            <div className={styles.kebab} onClick={onClickKebab}>
              <Image src={kebab} alt="kebab" />
            </div>
          </div>
          <div className={styles.description}>{link.description}</div>
          <div>{formatDate}</div>
        </div>
        {isKebabClicked && (
          <SelectMenu
            onClickKebab={onClickKebab}
            handleClickModal={handleClickModal}
          />
        )}
      </div>
      {currCardModal === "deleteLink" && (
        <DeleteLinkModal url={link.url} handleClickModal={handleClickModal} />
      )}
      {currCardModal === "addToFolder" && (
        <AddToFolderModal url={link.url} handleClickModal={handleClickModal} />
      )}
    </>
  );
}

export default Card;
