import { remarkCodeHike } from "@code-hike/mdx";
// import { myTheme } from "./codehike-theme.mjs";
import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  mdxOptions: {
    remarkPlugins: [
      [
        remarkCodeHike,
        {
          theme: "min-light",
          lineNumbers: false,
          showCopyButton: true,
        },
      ],
    ],
  },
  // options
  flexsearch: true,
  staticImage: true,
  defaultShowCopyCode: true,
});

const nextConfig = {
  images: {
    domains: ["media.substrate.run", "cdn.substrate.run"],
  },
};

export default withNextra(nextConfig);
