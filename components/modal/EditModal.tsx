import ModalLayout from "./ModalLayout";
import { MODALS } from "@/lib/const";
import styles from "./EditModal.module.css";
//type
import { MODAL } from "@/types/commonTypes";

interface Props {
  handleModalClick: (type: MODAL) => void;
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
