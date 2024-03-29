import Head from "next/head";
import type { AppProps } from "next/app";
import "@/styles/globals.css";
import HeaderFrame from "@/components/HeaderFrame";
import BottomNavBar from "@/components/BottomNavBar";

export default function App({ Component, pageProps }: AppProps) {
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
