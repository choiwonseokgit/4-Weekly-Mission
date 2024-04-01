import Image from "next/image";
import { FolderData } from "@/types/commonTypes";
import styles from "./UserProfile.module.css";

function UserProfile({ folderData }: { folderData: FolderData | {} }) {
  const owner = folderData && (folderData as FolderData).owner;
  const profileImageSource = owner && owner.profileImageSource;
  const profileName = owner && owner.name;
  return (
    <div className={styles.container}>
      {profileImageSource && (
        <Image
          width={256}
          height={256}
          className={styles.img}
          src={profileImageSource}
          alt=""
        />
      )}
      {profileName && <div className={styles.name}>{profileName}</div>}
      <div className={styles.folderName}>{(folderData as FolderData).name}</div>
    </div>
  );
}

export default UserProfile;
