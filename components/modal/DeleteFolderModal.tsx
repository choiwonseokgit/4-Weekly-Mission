import { MouseEvent } from "react";
import { MODALS } from "@/lib/const";
import { MODAL } from "@/types/commonTypes";
import ModalLayout from "./ModalLayout";
import styles from "./DeleteFolderModal.module.css";

interface Props {
  folderName: string;
  handleModalClick: (type: MODAL) => void;
}

function DeleteFolderModal({ folderName, handleModalClick }: Props) {
  const { deleteFolder } = MODALS;

  const onClickCloseButton = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    handleModalClick(null);
  };

  return (
    <ModalLayout
      title={deleteFolder.title}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.folderName}>{folderName}</div>
      <button className={styles.button}>{deleteFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default DeleteFolderModal;
