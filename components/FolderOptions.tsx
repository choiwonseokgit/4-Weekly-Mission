import Image from "next/image";
import deleteImg from "@/public/delete.svg";
import penImg from "@/public/pen.svg";
import shareImg from "@/public/share.svg";
import { MODAL } from "@/types/commonTypes";
import styles from "./FolderOptions.module.css";

interface Props {
  folderName: string;
  folderId: number;
  handleModalClick: (value: MODAL) => void;
}

function FolderOptions({ folderName, folderId, handleModalClick }: Props) {
  if (!folderName) return null;

  return (
    <>
      <div className={styles.folderName}>{folderName}</div>
      {folderId !== 1 && (
        <div className={styles.optionContainer}>
          <div
            className={styles.option}
            onClick={() => handleModalClick("share")}
          >
            <Image src={shareImg} alt="share" />
            <p className={styles.optionText}>공유</p>
          </div>
          <div
            className={styles.option}
            onClick={() => handleModalClick("edit")}
          >
            <Image src={penImg} alt="pen" />
            <p>이름 변경</p>
          </div>
          <div
            className={styles.option}
            onClick={() => handleModalClick("deleteFolder")}
          >
            <Image src={deleteImg} alt="delete" />
            <p>삭제</p>
          </div>
        </div>
      )}
    </>
  );
}

export default FolderOptions;
