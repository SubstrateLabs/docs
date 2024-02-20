import "../styles.css";
import { clsx } from "clsx";

import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  IBM_Plex_Sans_Condensed,
} from "next/font/google";

export const IBMPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

export const IBMPlexSansCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-condensed",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const ibmMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["500"],
});

import type { AppProps } from "next/app";
import { type ReactNode } from "react";

type NextraAppProps = AppProps & {
  Component: AppProps["Component"] & {
    getLayout: (page: ReactNode) => ReactNode;
  };
};

export default function Nextra({ Component, pageProps }: NextraAppProps) {
  return (
    <main
      className={clsx(
        IBMPlexSans.variable,
        ibmMono.variable,
        IBMPlexSansCondensed.variable,
        "font-sans"
      )}
    >
      <Component {...pageProps} />
    </main>
  );
}
