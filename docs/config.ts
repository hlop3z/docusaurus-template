import { gitHub, gitPage } from "./utils";

// ==================================================
// 🔗 GitHub & Project Info
// ==================================================
const ORGANIZATION = "hlop3z";
const PROJECT = "docusaurus-template";

export const Repo = {
  organization: ORGANIZATION,
  project: PROJECT,
  baseURL: `/${PROJECT}/`,
  gitpage: gitPage(ORGANIZATION),
  github: gitHub(ORGANIZATION, PROJECT),
};

// ==================================================
// 🎨 Site Branding
// ==================================================
export const Branding = {
  title: "Docusaurus",
  tagline: "Dinosaurs are cool",
  logo: "img/logo.svg",
  favicon: "img/favicon.ico",
  socialCard: "/img/docusaurus-social-card.jpg",
};

// ==================================================
// © Copyright
// ==================================================
export const Copyright = `Copyright © ${new Date().getFullYear()} — ${
  Repo.organization
}`;

// ==================================================
// 🧭 Navbar Configuration
// ==================================================
export const HeaderNavbar = [
  {
    type: "docSidebar",
    sidebarId: "tutorialSidebar",
    position: "left",
    label: "Docs",
  },
  { to: "/blog", label: "Blog", position: "left" },
  {
    href: Repo.github,
    label: "GitHub",
    position: "right",
  },
];

// ==================================================
// 🦶 Footer Links
// ==================================================
export const FooterLinks = [
  {
    title: "Docs",
    items: [{ label: "Tutorial", to: "/docs/intro" }],
  },
  {
    title: "Community",
    items: [
      {
        label: "Stack Overflow",
        href: "https://stackoverflow.com/questions/tagged/docusaurus",
      },
      { label: "Discord", href: "https://discordapp.com/invite/docusaurus" },
      { label: "X", href: "https://x.com/docusaurus" },
    ],
  },
  {
    title: "More",
    items: [
      { label: "Blog", to: "/blog" },
      { label: "Some Link", href: "https://example.com" },
    ],
  },
];
