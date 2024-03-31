import ModalLayout from "./ModalLayout";
import { MODALS } from "@/lib/const";
import styles from "./AddFolderModal.module.css";
//type
import { MODAL } from "@/types/commonTypes";

interface Props {
  handleModalClick: (type: MODAL) => void;
}

function AddFolderModal({ handleModalClick }: Props) {
  const { addFolder } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(null);
  };

  return (
    <ModalLayout
      title={addFolder.title}
      onClickCloseButton={onClickCloseButton}
    >
      <input
        className={styles.input}
        type="text"
        placeholder={addFolder.placeholder}
      />
      <button className={styles.button}>{addFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default AddFolderModal;
