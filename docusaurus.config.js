// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
export default {
  title: "Uniswap",
  tagline:  "Uniswap protocol",
  favicon: "img/favicon.ico",
  url: "https://docs.uniswap.org/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/undefined/undefined/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Uniswap",
      logo: {
        alt: "Uniswap Logo",
        src: "https://res.cloudinary.com/dckecq0n3/image/upload/v1703467505/protocol-logos/uniswap.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "contractSidebar",
          position: "left",
          label: "Contracts",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};