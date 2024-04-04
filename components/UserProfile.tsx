import Image from "next/image";
import { FolderData } from "@/types/commonTypes";
import styles from "./UserProfile.module.css";

interface Props {
  folderData: FolderData | {};
}

function UserProfile({ folderData }: Props) {
  if (Object.keys(folderData).length === 0) return null;

  const owner = (folderData as FolderData).owner;
  const { profileImageSource, name } = owner;

  return (
    <div className={styles.container}>
      <Image
        width={60}
        height={60}
        className={styles.img}
        src={profileImageSource}
        alt="프로필이미지"
      />
      <div className={styles.name}>{name}</div>
      <div className={styles.folderName}>{(folderData as FolderData).name}</div>
    </div>
  );
}

export default UserProfile;
