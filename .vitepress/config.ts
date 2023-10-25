import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'VitePress starter',
  description: '🚀 VitePress starter',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  ],
  lang: 'zh-CN',
  srcDir: './src',
  lastUpdated: true,
  markdown: {
    theme: 'vitesse-dark',
    lineNumbers: true,
  },
  themeConfig: {
    logo: '/img/logo.svg',
    siteTitle: 'VitePress starter',
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文档简介',
        link: '/guide/',
      },
    ],
    outline: {
      label: '在本页',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/tlyboy/vitepress-starter',
      },
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Guany',
    },
    editLink: {
      pattern:
        'https://github.com/tlyboy/vitepress-starter/edit/main/src/:path',
      text: '在 GitHub 上编辑此页',
    },
    lastUpdated: {
      text: '上次更新',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
  },
})
