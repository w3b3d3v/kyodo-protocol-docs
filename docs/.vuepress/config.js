import { defineUserConfig } from 'vuepress'
import { defaultTheme } from 'vuepress'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { externalLinkIconPlugin } from '@vuepress/plugin-external-link-icon'
import { searchPlugin } from '@vuepress/plugin-search'
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'
import { gitPlugin } from '@vuepress/plugin-git'
import { tocPlugin } from '@vuepress/plugin-toc'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default defineUserConfig({
  title: "共同 Kyōdō Protocol",
  description:
    "Sustainable Business Model for Service Communities and DAOs with Enhanced Privacy through Zero Knowledge Proofs",
  permalinkPattern: ":slug",
  theme: defaultTheme({
    // default theme config
    // logo: "/logo.svg",
    // logoDark: "/logoDark.svg",
    navbar: [
      {
        text: "Home",
        link: "/",
      },
    ],
    editLink: false,
    lastUpdated: true,
    sidebarDepth: 0,

    sidebar: [
      // SidebarItem
      {
        text: "Welcome",
        link: "/",
      },
      {
        text: "Overview",
        children: ["/introduction", "/market-fit", "/how-it-works", "/benefits", "/faq"],
      },
      {
        text: "The Protocol",
        children: [
          "/the-protocol/",
          "/the-protocol/concepts",
          "/the-protocol/roles",
          "/the-protocol/definitions",
        ],
      },
      {
        text: "Zero Knowledge Proofs (ZKP)",
        children: ["/zkp/", "/zkp/implementation"],
      },
      "/blockchain-basics",
      {
        text: "Tokenomics",
        children: [
          "/tokenomics/token",
          "/tokenomics/supply",
          "/tokenomics/liquidity-mining",
          "/tokenomics/treasury",
          "/tokenomics/disclaimers",
        ],
      },
      {
        text: "DAO",
        children: [
          "/dao/",
          "/dao/governance",
          "/dao/constitution",
          "/dao/entity",
          "/dao/service-provider",
        ],
      },
      {
        text: "About",
        children: ["/about/founders", "/about/web3dev"],
      },
    ],
    repo: "https://github.com/w3b3d3v/kyodo-protocol-docs",
    docsRepo: "https://github.com/w3b3d3v/kyodo-protocol-docs",
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: "G-XWH1M1SMFD",
    }),
    backToTopPlugin(),
    externalLinkIconPlugin(),
    searchPlugin(),
    activeHeaderLinksPlugin(),
    gitPlugin(),
    tocPlugin(),
    nprogressPlugin(),
  ],

  head: [
    ["link", { rel: "icon", href: "/favicon.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
})
