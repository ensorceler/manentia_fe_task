import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  subsets: ["devanagari", "latin-ext", "latin"],
  weight: "400",
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.className}`}>
      <Component {...pageProps} />
    </main>
  );
}
