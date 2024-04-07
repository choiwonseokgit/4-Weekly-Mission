import Image from "next/image";
import { useState, useRef } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
  UseFormWatch,
} from "react-hook-form";
import eyeOff from "@/public/eye-off.png";
import eyeOn from "@/public/eye-on.png";
import useMakeInputError from "@/src/hooks/useMakeInputError";
import styles from "./Input.module.css";

interface Props {
  type: "email" | "password";
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setError: UseFormSetError<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
  watch: UseFormWatch<FieldValues>;
}

function Input({ type, register, errors, setError, getValues }: Props) {
  const { ref, ...rest } = register(type);
  const [isPasswordVisible, SetIsPasswordVisible] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const inputClassName = errors[type]?.message
    ? `${styles.input} ${styles.error}`
    : styles.input;

  const handleEyeClick = () => {
    SetIsPasswordVisible(!isPasswordVisible);
  };

  useMakeInputError(type, inputRef, setError, getValues);

  if (type === "email")
    return (
      <div className={styles.container}>
        <input
          className={inputClassName}
          type="email"
          placeholder="이메일을 입력해주세요"
          {...rest}
          ref={(e) => {
            ref(e);
            inputRef.current = e;
          }}
        />
        {errors[type] && (
          <div className={styles.errorMessage}>
            {errors[type]?.message as string}
          </div>
        )}
      </div>
    );

  if (type === "password")
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <input
            className={inputClassName}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="비밀번호를 입력해주세요"
            {...rest}
            ref={(e) => {
              ref(e);
              inputRef.current = e;
            }}
          />
          <Image
            className={styles.img}
            src={isPasswordVisible ? eyeOn : eyeOff}
            onClick={handleEyeClick}
            alt="eye-toggle"
          />
        </div>
        {errors[type] && (
          <div className={styles.errorMessage}>
            {errors[type]?.message as string}
          </div>
        )}
      </div>
    );
}

export default Input;
