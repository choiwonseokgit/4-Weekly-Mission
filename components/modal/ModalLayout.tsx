import Image from "next/image";
import { ReactNode, MouseEvent } from "react";
import close from "@/public/close.svg";
import styles from "./ModalLayout.module.css";

interface Props {
  children: ReactNode;
  title: string;
  onClickCloseButton: (e: MouseEvent<HTMLDivElement>) => void;
}

function ModalLayout({ children, title, onClickCloseButton }: Props) {
  return (
    <div className={styles.background}>
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
