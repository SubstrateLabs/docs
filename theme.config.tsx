import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { HeaderLogo } from "./components/HeaderLogo";
import { useRouter } from "next/router";
import ExtraNavContent, { EditLink } from "./components/NavExtras";

const config: DocsThemeConfig = {
  logo: HeaderLogo,
  logoLink: false,
  footer: {
    component: null,
  },
  feedback: {
    content: null,
  },
  primaryHue: 211,
  primarySaturation: 77,
  toc: {
    extraContent: null,
  },
  search: {
    placeholder: "Search docs",
  },
  useNextSeoProps() {
    const { frontMatter } = useConfig();
    const { asPath } = useRouter();

    return {
      titleTemplate: asPath !== "/" ? "%s | Substrate" : "Substrate",
      description: frontMatter.description || "Substrate",
      twitter: {
        cardType: "summary_large_image",
        site: "https://substrate.run",
      },
    };
  },
  navbar: {
    extraContent: ExtraNavContent,
  },
  nextThemes: {
    forcedTheme: "light",
  },
  darkMode: false,
  docsRepositoryBase: "https://github.com/SubstrateLabs/docs/tree/main",
  editLink: {
    text: EditLink,
  },
};

export default config;
