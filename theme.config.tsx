import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { HeaderLogo } from "./components/HeaderLogo";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: HeaderLogo,
  logoLink: false,
  footer: {
    component: null,
  },
  // hide TOC: https://github.com/shuding/nextra/blob/8e86fc60deadf8d93114e313c770a0b611921e9b/packages/nextra-theme-docs/src/components/toc.tsx#L33
  feedback: {
    content: null,
  },
  primaryHue: 211,
  primarySaturation: 77,
  toc: {
    extraContent: null,
  },
  editLink: {
    component: null,
  },
  search: {
    placeholder: "Search guides",
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
  // navbar: {
  //   extraContent: DashboardLink,
  // },
  nextThemes: {
    forcedTheme: "light",
  },
  darkMode: false,
};

export default config;
