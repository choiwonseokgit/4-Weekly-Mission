import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* TODO: AppFrame 여기다가 옮기면 됨 */}
      <Head>
        <title>Linkbrary</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
