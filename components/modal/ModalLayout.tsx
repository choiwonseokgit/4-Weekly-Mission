import Image from "next/image";
import { ReactNode, MouseEvent } from "react";
import styles from "./ModalLayout.module.css";
import close from "@/public/close.svg";

interface Props {
  children: ReactNode;
  title: string;
  isModalClicked: boolean;
  onClickCloseButton: (e: MouseEvent<HTMLDivElement>) => void;
}

function ModalLayout({
  children,
  title,
  isModalClicked,
  onClickCloseButton,
}: Props) {
  const backgroundClassName = isModalClicked
    ? styles.background
    : styles.invisible;
  return (
    <div className={backgroundClassName}>
      <div className={styles.container}>
        <div className={styles.modalTitle}>{title}</div>
        <div className={styles.closeButton} onClick={onClickCloseButton}>
          <Image src={close} alt="Icon-close" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalLayout;
