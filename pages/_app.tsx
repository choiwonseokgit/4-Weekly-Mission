import Head from "next/head";
import "@/styles/globals.css";
import BottomNavBar from "@/components/BottomNavBar";
import HeaderFrame from "@/components/HeaderFrame";
import type { AppProps } from "next/app";

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
