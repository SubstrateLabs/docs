import { DocsThemeConfig } from "nextra-theme-docs";
import { HeaderLogo } from "./components/HeaderLogo";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: HeaderLogo,
  logoLink: false,
  footer: {
    component: null,
  },
  toc: {
    component: null,
  },
  useNextSeoProps: () => {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Substrate",
      };
    } else {
      return {
        title: "Substrate Docs",
      };
    }
  },
};

export default config;
