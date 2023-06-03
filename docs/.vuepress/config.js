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
  title: "Kyodo Protocol",
  permalinkPattern: ':slug',
  theme: defaultTheme({
    // default theme config
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
    ],
    editLink: false,
    lastUpdated: true,
    sidebarDepth: 0,
    sidebar: [
      // SidebarItem
      {
        text: 'Kyodo Protocol',
        link: '/',
      },
      {
        text: 'Overview',
        children: [
          '/introduction',
          '/how-it-works',
          '/benefits'
        ],
      },
      {
        text: 'Definitions',
        children: [
          '/entities',
          '/concepts',
          '/architecture'
        ],
      },
      // {
      //   text: 'Benefits',
      //   children: [
      //     '/community',
      //     '/professionals',
      //     '/contractors'
      //   ],
      // },
    ],
    repo: "https://github.com/w3b3d3v/kyodo-protocol",
    docsRepo: "https://github.com/w3b3d3v/kyodo-protocol-docs",
  }),
  plugins: [
    googleAnalyticsPlugin({
      id: 'G-XXXXXXXXXX'
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
    // ["link", { rel: "icon", href: "/favicon.ico" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no",
      },
    ],
  ],
})
