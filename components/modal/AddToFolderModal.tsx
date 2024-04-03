import { useState, useEffect } from "react";
import { getFolderListData } from "@/lib/api";
import { MODALS } from "@/lib/const";
import FolderInModal from "./FolderInModal";
import ModalLayout from "./ModalLayout";
import { FolderList, Modal } from "../../types/commonTypes";
import styles from "./AddToFolderModal.module.css";

interface Props {
  url: string;
  handleClickModal: (value: Modal) => void;
  linkValue?: any;
  makeEmptyValue?: any;
}

function AddToFolderModal({
  url,
  handleClickModal,
  linkValue,
  makeEmptyValue,
}: Props) {
  const [folderList, setFolderList] = useState<FolderList[]>([]);
  const [clickedFolderId, setClickedFolderID] = useState<number | null>(null);
  const { addToFolder } = MODALS;

  const onClickCloseButton = () => {
    handleClickModal(null);
    if (linkValue) makeEmptyValue();
  };

  const getFolderList = async () => {
    try {
      const folderListData = await getFolderListData();
      const { data } = folderListData;
      setFolderList(data);
    } catch (err) {
      console.error(err);
      setFolderList([]);
    }
  };

  const onClickFolder = (id: number) => {
    setClickedFolderID(id);
  };

  useEffect(() => {
    getFolderList();
  }, []);

  return (
    <ModalLayout
      title={addToFolder.title}
      onClickCloseButton={onClickCloseButton}
    >
      <div className={styles.url}>{url}</div>
      <div className={styles.folderList}>
        {folderList.map((folder) => (
          <FolderInModal
            key={folder.id}
            folder={folder}
            isClicked={folder.id === clickedFolderId}
            onClickFolder={() => onClickFolder(folder.id)}
          />
        ))}
      </div>
      <button className={styles.button}>{addToFolder.buttonName}</button>
    </ModalLayout>
  );
}

export default AddToFolderModal;
