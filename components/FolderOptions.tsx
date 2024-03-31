import Image from "next/image";
import deleteImg from "@/public/delete.svg";
import penImg from "@/public/pen.svg";
import shareImg from "@/public/share.svg";
import styles from "./FolderOptions.module.css";
import { MODALS } from "@/lib/const";
//type
import { IsModalClicked } from "./FolderListBar";

interface Props {
  folderName: string;
  folderId: number;
  handleModalClick: (type: keyof IsModalClicked) => void;
}

function FolderOptions({ folderName, folderId, handleModalClick }: Props) {
  const { edit, deleteFolder, share } = MODALS;

  if (!folderName) return null;

  return (
    <>
      <div className={styles.folderName}>{folderName}</div>
      {folderId !== 1 && (
        <div className={styles.optionContainer}>
          <div
            className={styles.option}
            onClick={() => handleModalClick(share.type as keyof IsModalClicked)}
          >
            <Image src={shareImg} alt="share" />
            <p className={styles.optionText}>공유</p>
          </div>
          <div
            className={styles.option}
            onClick={() => handleModalClick(edit.type as keyof IsModalClicked)}
          >
            <Image src={penImg} alt="pen" />
            <p>이름 변경</p>
          </div>
          <div
            className={styles.option}
            onClick={() =>
              handleModalClick(deleteFolder.type as keyof IsModalClicked)
            }
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
