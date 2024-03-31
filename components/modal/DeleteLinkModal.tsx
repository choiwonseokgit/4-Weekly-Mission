import { MouseEvent } from "react";

import ModalLayout from "./ModalLayout";
import { MODALS } from "@/lib/const";
import styles from "./DeleteLinkModal.module.css";
//types
import { MODAL } from "@/types/commonTypes";

interface Props {
  url: string;
  handleClickModal: (value: MODAL) => void;
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
