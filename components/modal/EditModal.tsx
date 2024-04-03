import { MODALS } from "@/lib/const";
import { Modal } from "@/types/commonTypes";
import ModalLayout from "./ModalLayout";
import styles from "./EditModal.module.css";

interface Props {
  handleModalClick: (type: Modal) => void;
}

function EditModal({ handleModalClick }: Props) {
  const { edit } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(null);
  };

  return (
    <ModalLayout title={edit.title} onClickCloseButton={onClickCloseButton}>
      <input
        className={styles.input}
        type="text"
        placeholder={edit.placeholder}
      />
      <button className={styles.button}>{edit.buttonName}</button>
    </ModalLayout>
  );
}

export default EditModal;
