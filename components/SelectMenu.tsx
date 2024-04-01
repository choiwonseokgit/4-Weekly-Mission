import { MouseEvent } from "react";
import { MODAL } from "@/types/commonTypes";
import styles from "./SelectMenu.module.css";

interface Props {
  onClickKebab: (e: MouseEvent) => void;
  handleClickModal: (value: MODAL) => void;
}

function SelectMenu({ onClickKebab, handleClickModal }: Props) {
  const onClickKebabDelete = (e: MouseEvent) => {
    onClickKebab(e);
    handleClickModal("deleteLink");
  };

  const onClickKebabAddToFolder = (e: MouseEvent) => {
    onClickKebab(e);
    handleClickModal("addToFolder");
  };

  return (
    <>
      <div className={styles.container}>
        <div onClick={onClickKebabDelete} className={styles.nonClicked}>
          삭제하기
        </div>
        <div onClick={onClickKebabAddToFolder} className={styles.nonClicked}>
          폴더에 추가
        </div>
      </div>
    </>
  );
}

export default SelectMenu;
