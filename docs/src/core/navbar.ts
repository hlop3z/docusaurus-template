import { Logo } from "../../config";

export default {
  title: "Doc",
  logo: {
    alt: "My Site Logo",
    src: Logo,
  },
  items: [
    {
      type: "docSidebar",
      sidebarId: "tutorialSidebar",
      position: "left",
      label: "Tutorial",
    },
    { to: "/blog", label: "Blog", position: "left" },
    {
      href: "https://github.com/facebook/docusaurus",
      label: "GitHub",
      position: "right",
    },
  ],
};
