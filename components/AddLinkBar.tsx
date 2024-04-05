import Image from "next/image";
import { useState, ChangeEvent } from "react";
import link from "@/public/link.svg";
import { Modal } from "@/types/commonTypes";
import AddToFolderModal from "./modal/AddToFolderModal";
import styles from "./AddLinkBar.module.css";

interface Props {
  isAtBottom: boolean;
}

function AddLinkBar({ isAtBottom }: Props) {
  const [linkValue, setLinkValue] = useState<string>("");
  const [currCardModal, setCurrCardModal] = useState<Modal>(null);

  const onChangeLinkValue = (e: ChangeEvent<HTMLInputElement>) => {
    setLinkValue(e.target.value);
  };

  const handleClickModal = (value: Modal) => {
    setCurrCardModal(value);
  };

  const makeEmptyValue = () => {
    setLinkValue("");
  };

  return (
    <>
      <div className={isAtBottom ? styles.bottomArea : styles.area}>
        <div className={styles.container}>
          <div className={styles.inputContainer}>
            <Image src={link} alt="링크" />
            <input
              value={linkValue}
              className={styles.input}
              type="text"
              placeholder="링크를 추가해 보세요"
              onChange={onChangeLinkValue}
            />
          </div>
          <button
            className={styles.button}
            onClick={() => handleClickModal("addToFolder")}
          >
            추가하기
          </button>
        </div>
        {currCardModal === "addToFolder" && (
          <AddToFolderModal
            url={linkValue}
            handleClickModal={handleClickModal}
            linkValue={linkValue}
            makeEmptyValue={makeEmptyValue}
          />
        )}
      </div>
    </>
  );
}

export default AddLinkBar;
