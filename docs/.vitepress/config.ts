import { defineConfig } from "vitepress";
export default defineConfig({
  appearance: true,
  title: "Chakra Kit",
  description: "Build responsive and accessible apps 10x faster",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "/Chakra.png",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
  ],
  themeConfig: {
    logo: "/Chakra.png",
    socialLinks:
      [{ icon: 'github', link: 'https://github.com/selemondev' },
      { icon: 'twitter', link: "https://twitter.com/selemondev" }],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2023-PRESENT Selemon Brahanu.",
    },

    nav: [
      {
        text: "Guide",
        items: [
          {
            text: "Frameworks",
            items: [
              {
                text: "React 18",
                link: "/guide/getting-started/installation",
              },
              {
                text: "Next 12",
                link: "/guide/getting-started/installation-nextjs",
              },
              {
                text: "Vue 3",
                link: "/guide/getting-started/installation-vue",
              },
              {
                text: "Nuxt 2",
                link: "/guide/getting-started/installation-nuxtjs",
              },
            ],
          },
        ],
      },
      {
        text: "Components",
        link: "/components/authentication",
      },
      {
        text: "Templates",
        link: "/templates",
      },
    ],
    sidebar: [
      {
        text: "Getting Started",
        items: [
          { text: "Installation", link: "/guide/getting-started/installation" },
          {
            text: "With Nextjs",
            link: "/guide/getting-started/installation-nextjs",
          },
          {
            text: "With Vue 3",
            link: "/guide/getting-started/installation-vue",
          },
          {
            text: "With Nuxt 2",
            link: "/guide/getting-started/installation-nuxtjs",
          }
        ],
      },

      {
        text: "Components",
        items: [{
          text: "Authentication",
          link: "/guide/components/authentication"
        }, {
          text: "Banners",
          link: "/guide/components/banners"
        }, {
          text: "Buttons",
          link: "/guide/components/buttons"
        }],
      },
    ],
    editLink: {
      pattern: "https://github.com",
      text: "Edit this page on GitHub",
    },
  },
});
