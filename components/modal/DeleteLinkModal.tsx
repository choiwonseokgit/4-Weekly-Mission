import { MouseEvent } from "react";
import { MODALS } from "@/lib/const";
import { Modal } from "@/types/commonTypes";
import ModalLayout from "./ModalLayout";
import styles from "./DeleteLinkModal.module.css";

interface Props {
  url: string;
  handleClickModal: (value: Modal) => void;
}

function DeleteLinkModal({ url, handleClickModal }: Props) {
  const { deleteLink } = MODALS;

  const onClickCloseButton = (e: MouseEvent) => {
    e.stopPropagation();
    handleClickModal(null);
  };

  return (
    <ModalLayout
      title={deleteLink.title}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.url}>{url}</div>
      <button className={styles.button}>{deleteLink.buttonName}</button>
    </ModalLayout>
  );
}

export default DeleteLinkModal;
