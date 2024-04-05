import Image from "next/image";
import { useState, MouseEvent } from "react";
import { dateDiffCalc, dateFormatter } from "@/lib/datecalc";
import iconEmptyLogo from "@/public/emptylogo.svg";
import kebab from "@/public/kebab.svg";
import star from "@/public/star.svg";
import AddToFolderModal from "./modal/AddToFolderModal";
import DeleteLinkModal from "./modal/DeleteLinkModal";
import SelectMenu from "./SelectMenu";
import { Link, LinksData, Modal } from "../types/commonTypes";
import styles from "./Card.module.css";

interface Props {
  link: Link | LinksData;
}

function Card({ link }: Props) {
  const [isKebabClicked, setIsKebabClicked] = useState(false);
  const [currCardModal, setCurrCardModal] = useState<Modal>(null);
  const [isImgError, setIsImgError] = useState(false);

  const cardImage =
    (link as Link).imageSource || (link as LinksData)["image_source"]
      ? (link as Link).imageSource || (link as LinksData)["image_source"]
      : iconEmptyLogo;

  const absoluteCardImageUrl = cardImage.toString().startsWith("//", "/")
    ? `https:${cardImage}`
    : cardImage;

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

  const handleClickModal = (value: Modal) => {
    setCurrCardModal(value);
  };

  const CARD_MODAL = {
    addToFolder: (
      <AddToFolderModal url={link.url} handleClickModal={handleClickModal} />
    ),
    deleteLink: (
      <DeleteLinkModal url={link.url} handleClickModal={handleClickModal} />
    ),
  };

  return (
    <>
      <div className={styles.container} onClick={onClickCard}>
        <div className={styles.imgContainer}>
          <Image
            width={340}
            height={240}
            className={styles.img}
            src={isImgError ? iconEmptyLogo : absoluteCardImageUrl}
            alt="이미지"
            onError={() => setIsImgError(true)}
          />
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
      {CARD_MODAL[currCardModal as keyof Modal]}
    </>
  );
}

export default Card;
