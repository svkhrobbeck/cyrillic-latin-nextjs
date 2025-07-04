import "@/styles/globals.css";

import { Toaster } from "sonner";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster position="top-right" theme="dark" richColors duration={5000} visibleToasts={6}  />
      <Component {...pageProps} />
    </>
  );
}
