import Image from "next/image";
import { useState } from "react";
import {
  FieldErrors,
  FieldValues,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";
import { postEmailIsValid } from "@/lib/api";
import eyeOff from "@/public/eye-off.png";
import eyeOn from "@/public/eye-on.png";
import { InputType } from "@/types/commonTypes";
import styles from "./Input.module.css";

interface Props {
  placeholder: string;
  type: InputType;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  setError: UseFormSetError<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

const options = {
  signInEmail: {
    required: "이메일을 입력해주세요",
  },
  signInPassword: {
    required: "비밀번호를 입력해주세요",
  },
  signUpEmail: {
    required: "이메일을 입력해주세요",
    validate: {
      isValidEmail: async (email: FieldValues) => {
        try {
          const response = await postEmailIsValid({ email });
          return response.error ? response.error.message : true;
        } catch (err) {
          console.error(err);
        }
      },
    },
  },
  signUpPassword: {
    required: "비밀번호를 입력해주세요",
    minLength: {
      value: 8,
      message: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
    },
  },
};

const Type = {
  email: ["signInEmail", "signUpEmail"],
  password: ["signInPassword", "signUpPassword", "signUpPasswordCheck"],
};

function Input({ placeholder, type, register, errors, getValues }: Props) {
  const myOptions = {
    ...options,
    signUpPasswordCheck: {
      validate: {
        isSamePassword: (passwordCheck: string) => {
          const values = getValues();
          const password = values["signUpPassword"];
          return passwordCheck === password || "비밀번호가 일치하지 않아요";
        },
      },
    },
  };
  const { ...rest } = register(type, myOptions[type]);
  const [isPasswordVisible, SetIsPasswordVisible] = useState(false);

  const inputClassName = errors[type]?.message
    ? `${styles.input} ${styles.error}`
    : styles.input;

  const handleEyeClick = () => {
    SetIsPasswordVisible(!isPasswordVisible);
  };

  if (Type.email.includes(type))
    return (
      <div className={styles.container}>
        <input
          className={inputClassName}
          type="email"
          placeholder={placeholder}
          {...rest}
        />
        {errors[type] && (
          <div className={styles.errorMessage}>
            {errors[type]?.message as string}
          </div>
        )}
      </div>
    );

  if (Type.password.includes(type))
    return (
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <input
            className={inputClassName}
            type={isPasswordVisible ? "text" : "password"}
            placeholder={placeholder}
            {...rest}
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
