import { useState, useEffect, MutableRefObject } from "react";
import {
  UseFormSetError,
  UseFormGetValues,
  FieldValues,
} from "react-hook-form";

enum emptyErrors {
  email = "이메일을 입력해주세요",
  password = "비밀번호를 입력해주세요",
}

export default function useMakeInputError(
  type: "email" | "password",
  inputRef: MutableRefObject<HTMLInputElement | null>,
  setError: UseFormSetError<FieldValues>,
  getValues: UseFormGetValues<FieldValues>
) {
  const [isFirstFocusIn, setIsFirstFocusIn] = useState(false);

  useEffect(() => {
    const handleMakeAndRemoveErrorClickInAndOut = (e: MouseEvent) => {
      const currValue = getValues();
      if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
        if (isFirstFocusIn && currValue[type] === "") {
          setError(type, {
            type: "emptyError",
            message: emptyErrors[type],
          });
        }
      }

      if (inputRef.current && inputRef.current.contains(e.target as Node)) {
        setIsFirstFocusIn(true);
        setError(type, {});
      }
    };

    window.addEventListener("mousedown", handleMakeAndRemoveErrorClickInAndOut);
    return () => {
      window.removeEventListener(
        "mousedown",
        handleMakeAndRemoveErrorClickInAndOut
      );
    };
  }, [getValues, setError, type, isFirstFocusIn, inputRef]);
}
