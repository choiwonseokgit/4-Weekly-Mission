import { useEffect } from "react";
import { MODALS } from "@/lib/const";
import { SHARE_MODAL_BUTTON } from "@/lib/const";
import { Modal } from "@/types/commonTypes";
import ModalLayout from "./ModalLayout";
import ShareModalButton from "./ShareModalButton";
import styles from "./ShareModal.module.css";

interface Props {
  folderName: string;
  handleModalClick: (type: Modal) => void;
  makeShareLink: () => void;
}

function ShareModal({ folderName, handleModalClick, makeShareLink }: Props) {
  const { share } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(null);
  };

  useEffect(() => {
    const idx = SHARE_MODAL_BUTTON.findIndex((el) => el.tag === "link");
    SHARE_MODAL_BUTTON[idx].onClick = makeShareLink;
  }, [makeShareLink]);

  return (
    <ModalLayout title={share.title} onClickCloseButton={onClickCloseButton}>
      <div className={styles.folderName}>{folderName}</div>
      <div className={styles.container}>
        {SHARE_MODAL_BUTTON.map((btn) => (
          <ShareModalButton key={btn.tag} {...btn} />
        ))}
      </div>
    </ModalLayout>
  );
}

export default ShareModal;
