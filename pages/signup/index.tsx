import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Input from "@/components/Input";
import { postJoin } from "@/lib/api";
import { SOCIAL_LOGIN } from "@/lib/const";
import google from "@/public/google.png";
import kakao from "@/public/kakao.svg";
import logo from "@/public/logo.svg";
import styles from "@/styles/SignPage.module.css";

const PLACEHOLDER = {
  email: "이메일을 입력해주세요",
  password: "영문,숫자를 조합해 8자 이상 입력해 주세요",
  passwordCheck: "비밀번호와 일치하는 값을 입력 해주세요",
};

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm({ mode: "onBlur" });

  const router = useRouter();

  const join = async (data: FieldValues) => {
    const { signUpEmail: email, signUpPassword: password } = data;
    const myData = { email, password };
    try {
      const responseData = await postJoin(myData);
      console.log(responseData);
      const accessToken = responseData.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      router.replace("/folder");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      router.replace("/folder");
    }
  }, [router]);

  return (
    <div className={styles.background}>
      <form
        className={styles.form}
        onSubmit={handleSubmit((data) => join(data))}
      >
        <Image
          width={210}
          height={38}
          src={logo}
          alt="로고"
          onClick={() => router.push("/shared")}
          className={styles.logo}
        />
        <div className={styles.logoUnderTextBox}>
          <span>회원이 아니신가요? </span>
          <Link href={"/signin"} className={styles.link}>
            로그인 하기
          </Link>
        </div>
        <div className={styles.inputBox}>
          <span>이메일</span>
          <Input
            placeholder={PLACEHOLDER.email}
            type={"signUpEmail"}
            register={register}
            errors={errors}
            setError={setError}
            getValues={getValues}
          />
        </div>
        <br />
        <div className={styles.inputBox}>
          <span>비밀번호</span>
          <Input
            placeholder={PLACEHOLDER.password}
            type={"signUpPassword"}
            register={register}
            errors={errors}
            setError={setError}
            getValues={getValues}
          />
        </div>
        <br />
        <div className={styles.inputBox}>
          <span>비밀번호 확인</span>
          <Input
            placeholder={PLACEHOLDER.passwordCheck}
            type={"signUpPasswordCheck"}
            register={register}
            errors={errors}
            setError={setError}
            getValues={getValues}
          />
        </div>
        <button type="submit" className={styles.loginBtn}>
          회원가입
        </button>
        <div className={styles.socialLoginBox}>
          <span>다른 방식으로 가입하기</span>
          <div className={styles.btnBox}>
            <Link href={SOCIAL_LOGIN.google} className={styles.googleBtn}>
              <Image src={google} alt="구글버튼" />
            </Link>
            <Link href={SOCIAL_LOGIN.kakao} className={styles.kakaoBtn}>
              <Image width={26} height={24} src={kakao} alt="카카오버튼" />
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
