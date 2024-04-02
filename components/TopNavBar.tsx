import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.svg";
import { ProfileData } from "../types/commonTypes";
import styles from "./TopNavBar.module.css";

interface Props {
  profileData: ProfileData | {};
  isSticky: boolean;
}

function TopNavBar({ profileData, isSticky }: Props) {
  const containerClassName = isSticky
    ? `${styles.container} ${styles.sticky}`
    : styles.container;

  return (
    <div className={containerClassName}>
      <div className={styles.logoContainer}>
        <Link href="/shared">
          <Image src={logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.profileContainer}>
        {(profileData as ProfileData).email ? (
          <>
            <Image
              width={28}
              height={28}
              className={styles.img}
              src={(profileData as ProfileData).profileImageSource}
              alt="이미지"
            />
            <div className={styles.email}>
              {(profileData as ProfileData).email}
            </div>
          </>
        ) : (
          <div className={styles.loginBtn}>로그인</div>
        )}
      </div>
    </div>
  );
}

export default TopNavBar;
