import Head from "next/head";
import "@/styles/globals.css";
import { useRouter } from "next/router";
import BottomNavBar from "@/components/BottomNavBar";
import HeaderFrame from "@/components/HeaderFrame";
import type { AppProps } from "next/app";

const SIGN_PAGE = ["/signin", "/signup"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { asPath } = router;

  if (SIGN_PAGE.includes(asPath))
    return (
      <>
        <Head>
          <title>Linkbrary</title>
        </Head>
        <Component {...pageProps} />
      </>
    );

  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <HeaderFrame />
      <main>
        <Component {...pageProps} />
      </main>
      <BottomNavBar />
    </>
  );
}
