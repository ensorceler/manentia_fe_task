import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { poppinsLocal } from "../../public/assets/fonts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppinsLocal.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
