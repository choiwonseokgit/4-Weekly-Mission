import Image from "next/image";
import { useState, useMemo } from "react";
import { WHOLE_BUTTON } from "@/lib/const";
import { copyClipBoard } from "@/lib/copyClipBoard";
import addImg from "@/public/add.svg";
import FolderButton from "./FolderButton";
import FolderOptions from "./FolderOptions";
import AddFolderModal from "./modal/AddFolderModal";
import DeleteFolderModal from "./modal/DeleteFolderModal";
import EditModal from "./modal/EditModal";
import ShareModal from "./modal/ShareModal";
import { FolderList, Modal } from "../types/commonTypes";
import styles from "./FolderListBar.module.css";

interface Props {
  folderList: FolderList[];
  onClick: (id: number) => void;
}

function FolderListBar({ folderList, onClick }: Props) {
  const [currentFolderName, setCurrentFolderName] = useState<string>("");
  const [currentFolderId, setCurrentFolderId] = useState<number>(1);
  const [currentUserId, setCurrentUserId] = useState<number | null>(null);
  const [currOpenModal, setCurrOpenModal] = useState<Modal>(null);

  const getLinksbyId = (id: number) => {
    onClick(id);
  };

  const changeFolder = (folder: FolderList) => {
    const folderName = folder && folder.name;
    const folderId = folder && folder.id;
    const userId = folder && folder["user_id"];
    setCurrentFolderName(folderName);
    setCurrentFolderId(folderId);
    setCurrentUserId(userId);
    getLinksbyId(folderId);
  };

  const changeClickedId = (id: number) => {
    setCurrentFolderId(id);
  };

  const handleModalClick = (value: Modal) => {
    setCurrOpenModal(value);
  };

  const makeShareLink = (userId: number | null, folderId: number) => {
    const url = `${window.location.origin}/shared?user=${userId}&folder=${folderId}`;
    copyClipBoard(url);
  };

  const newFolderList = useMemo(() => {
    return [WHOLE_BUTTON, ...folderList];
  }, [folderList]);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnContainer}>
          {newFolderList.map((folder) => (
            <FolderButton
              key={folder.id}
              folder={folder}
              onClick={changeFolder}
              isClicked={folder.id === currentFolderId}
              changeClickedId={() => changeClickedId(folder.id)}
            />
          ))}
        </div>
        <div
          className={
            currentFolderId === 1 ? styles.invisible : styles.addFolderContainer
          }
          onClick={() => handleModalClick("add")}
        >
          <div className={styles.addFolderText}>폴더 추가</div>
          <Image className={styles.addImg} src={addImg} alt="addImg" />
        </div>
      </div>
      <div className={styles.folderOptionsContainer}>
        <FolderOptions
          folderName={currentFolderName}
          folderId={currentFolderId}
          handleModalClick={handleModalClick}
        />
      </div>
      {currOpenModal === "add" && (
        <AddFolderModal handleModalClick={handleModalClick} />
      )}

      {currOpenModal === "edit" && (
        <EditModal handleModalClick={handleModalClick} />
      )}

      {currOpenModal === "deleteFolder" && (
        <DeleteFolderModal
          folderName={currentFolderName}
          handleModalClick={handleModalClick}
        />
      )}

      {currOpenModal === "share" && (
        <ShareModal
          folderName={currentFolderName}
          handleModalClick={handleModalClick}
          makeShareLink={() => makeShareLink(currentUserId, currentFolderId)}
        />
      )}
    </>
  );
}

export default FolderListBar;
