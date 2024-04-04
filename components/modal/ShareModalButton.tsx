import Image from "next/image";
import { ShareModalButtonType } from "@/types/commonTypes";
import styles from "./ShareModalButton.module.css";

interface Props extends ShareModalButtonType {}

function ShareModalButton({ tag, description, img, onClick }: Props) {
  return (
    <button className={styles.button}>
      <div className={styles[tag]} onClick={onClick}>
        <Image src={img} alt={tag} />
      </div>
      <span>{description}</span>
    </button>
  );
}

export default ShareModalButton;
