import localFont from "next/font/local";
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
