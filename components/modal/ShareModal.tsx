import Image from "next/image";
import { MODALS } from "@/lib/const";
import facebookImg from "@/public/FacebookPng.png";
import kakaoImg from "@/public/KakaoSmall.svg";
import linkImg from "@/public/link.svg";
import { MODAL } from "@/types/commonTypes";
import ModalLayout from "./ModalLayout";
import styles from "./ShareModal.module.css";

interface Props {
  folderName: string;
  handleModalClick: (type: MODAL) => void;
  makeShareLink: () => void;
}

function ShareModal({ folderName, handleModalClick, makeShareLink }: Props) {
  const { share } = MODALS;

  const onClickCloseButton = () => {
    handleModalClick(null);
  };

  return (
    <ModalLayout title={share.title} onClickCloseButton={onClickCloseButton}>
      <div className={styles.folderName}>{folderName}</div>
      <div className={styles.container}>
        <button className={styles.button}>
          <div className={styles.kakao}>
            <Image src={kakaoImg} alt="kakao" />
          </div>
          <span className={styles.span}>카카오톡</span>
        </button>
        <button className={styles.button}>
          <div className={styles.facebook}>
            <Image src={facebookImg} alt="facebook" />
          </div>
          <span className={styles.span}>페이스북</span>
        </button>
        <button className={styles.button} onClick={makeShareLink}>
          <div className={styles.link}>
            <Image src={linkImg} alt="link" />
          </div>
          <span className={styles.span}>링크 복사</span>
        </button>
      </div>
    </ModalLayout>
  );
}

export default ShareModal;
