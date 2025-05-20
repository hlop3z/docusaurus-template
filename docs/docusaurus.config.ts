import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import footer from "./src/core/footer";
import navbar from "./src/core/navbar";
import { gitHub, gitPage } from "./utils";
import { Favicon, Title, Organization, Project, BaseURL } from "./config";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const GitPage = gitPage(Organization);
const GitHub = gitHub(Organization, Project);

const config: Config = {
  title: Title,
  favicon: Favicon,
  tagline: "Dinosaurs are cool",

  // Set the production url of your site here
  url: GitPage,
  baseUrl: BaseURL,

  // GitHub pages deployment config.
  organizationName: Organization,
  projectName: Project,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `${GitHub}/tree/main/docs/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: `${GitHub}/tree/main/docs/blog/`,
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "/img/docusaurus-social-card.jpg",
    //@ts-ignore
    navbar: navbar,
    //@ts-ignore
    footer: footer,
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
