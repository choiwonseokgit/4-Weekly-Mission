import Image from "next/image";
import checkImg from "@/public/check.png";
import { FolderList } from "../../types/commonTypes";
import styles from "./AddToFolderModal.module.css";

interface Props {
  folder: FolderList;
  isClicked: boolean;
  onClickFolder: () => void;
}

function FolderInModal({ folder, isClicked, onClickFolder }: Props) {
  const folderNameClassName = isClicked
    ? styles.clickedFolderName
    : styles.folderName;
  return (
    <>
      <button className={styles.folderButton} onClick={onClickFolder}>
        <div className={styles.textContainer}>
          <span className={folderNameClassName}>{folder.name}</span>
          <span className={styles.linkCount}>{folder.link.count}개 링크</span>
        </div>
        {isClicked && <Image src={checkImg} alt="checkImg" />}
      </button>
    </>
  );
}

export default FolderInModal;
