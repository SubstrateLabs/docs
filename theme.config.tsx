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
  nextThemes: {
    forcedTheme: "light",
  },
  darkMode: false,
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    const url = "https://docs.substrate.run" + asPath;

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "Substrate"} />
        <meta property="og:description" content={frontMatter.description || "Substrate Docs"} />
        <meta name="twitter:card" content="og_image_v3" />
        <meta name="twitter:site" content="@SubstrateLabs" />
      </>
    );
  },
};

export default config;
