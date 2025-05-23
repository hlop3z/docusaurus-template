import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import { Repo, Branding, HeaderNavbar, FooterLinks, Copyright } from "./config";
// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: Branding.title,
  favicon: Branding.favicon,
  tagline: Branding.tagline,

  // Set the production url of your site here
  url: Repo.gitpage,
  baseUrl: Repo.baseURL,

  // GitHub pages deployment config.
  organizationName: Repo.organization,
  projectName: Repo.project,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  themes: ["@docusaurus/theme-mermaid"],

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl: `${Repo.github}/tree/main/docs/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          editUrl: `${Repo.github}/tree/main/docs/`,
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
    image: Branding.socialCard,
    navbar: {
      title: Branding.title,
      logo: {
        alt: "Site Logo",
        src: Branding.logo,
      },
      //@ts-ignore
      items: HeaderNavbar,
    },
    footer: {
      style: "dark",
      copyright: Copyright,
      links: FooterLinks,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
