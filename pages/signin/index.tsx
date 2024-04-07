import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm, FieldValues } from "react-hook-form";
import Input from "@/components/Input";
import { postLogin } from "@/lib/api";
import { SOCIAL_LOGIN, LOGIN_FAIL_ERROR } from "@/lib/const";
import google from "@/public/google.png";
import kakao from "@/public/kakao.svg";
import logo from "@/public/logo.svg";
import styles from "@/styles/SignPage.module.css";

const PLACEHOLDER = {
  email: "이메일을 입력해주세요",
  password: "비밀번호를 입력해주세요",
};

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm({ mode: "onBlur" });

  const router = useRouter();

  const Login = async (data: FieldValues) => {
    const { signInEmail: email, signInPassword: password } = data;
    const myData = { email, password };
    try {
      const responseData = await postLogin(myData);
      const accessToken = responseData.data.accessToken;
      localStorage.setItem("accessToken", accessToken);
      router.replace("/folder");
    } catch (err) {
      console.error(err);
      setError("signInEmail", LOGIN_FAIL_ERROR.email);
      setError("signInPassword", LOGIN_FAIL_ERROR.password);
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
        onSubmit={handleSubmit((data) => Login(data))}
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
          <Link href={"/signup"} className={styles.link}>
            회원 가입하기
          </Link>
        </div>
        <div className={styles.inputBox}>
          <span>이메일</span>
          <Input
            placeholder={PLACEHOLDER.email}
            type={"signInEmail"}
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
            type={"signInPassword"}
            register={register}
            errors={errors}
            setError={setError}
            getValues={getValues}
          />
        </div>
        <button type="submit" className={styles.loginBtn}>
          로그인
        </button>
        <div className={styles.socialLoginBox}>
          <span>소셜 로그인</span>
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

export default SignIn;
