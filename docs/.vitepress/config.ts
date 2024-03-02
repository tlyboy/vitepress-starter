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
  lastUpdated: true,
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark',
    },
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
      label: '页面导航',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/tlyboy/vitepress-starter',
      },
    ],
    footer: {
      message: '基于 MIT 许可发布',
      copyright: '版权所有 © 2023-present Guany',
    },
    editLink: {
      pattern:
        'https://github.com/tlyboy/vitepress-starter/edit/main/src/:path',
      text: '在 GitHub 上编辑此页面',
    },
    lastUpdated: {
      text: '最后更新于',
    },
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
  },
})
