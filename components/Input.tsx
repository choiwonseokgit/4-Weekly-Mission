import Image from "next/image";
import { useState } from "react";
import eyeOff from "@/public/eye-off.png";
import eyeOn from "@/public/eye-on.png";
import styles from "./Input.module.css";

function Input() {
  const [isError, setIsError] = useState(false);
  const [isEyeOn, setIsEyeOn] = useState(false);

  const inputClassName = isError
    ? `${styles.input} ${styles.error}`
    : styles.input;

  const handleEyeClick = () => {
    setIsEyeOn(!isEyeOn);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <input
          className={inputClassName}
          type={isEyeOn ? "text" : "password"}
          placeholder="내용 입력"
        />
        <Image
          className={styles.img}
          src={isEyeOn ? eyeOn : eyeOff}
          onClick={handleEyeClick}
          alt="eye-toggle"
        />
      </div>
      {isError && (
        <div className={styles.errorMessage}>내용을 다시 작성해주세요</div>
      )}
    </div>
  );
}

export default Input;
