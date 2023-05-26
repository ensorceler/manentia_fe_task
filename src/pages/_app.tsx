import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppinsLocal } from "../../public/assets/fonts";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kodex Technology</title>
      </Head>
      <main className={`${poppinsLocal.className}`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
