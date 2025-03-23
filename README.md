# vitepress-starter

🚀 基于 VitePress 的文档站点启动模板

## 特性

- 📦 开箱即用的 VitePress 配置
- 🎨 使用 Vue 3 + TypeScript 开发
- 🚀 快速部署到 Vercel/Netlify
- 📱 响应式设计，支持移动端访问

## 快速开始

使用 degit 创建项目：

```bash
npx degit tlyboy/vitepress-starter my-new-project
```

安装依赖：

```bash
cd my-new-project
pnpm install
```

本地开发：

```bash
pnpm dev
```

构建部署：

```bash
pnpm build
```

## 环境要求

- Node.js 22.x
- pnpm 10.6.2+

## 部署

本项目支持一键部署到以下平台：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tlyboy/vitepress-starter)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/tlyboy/vitepress-starter)

### Vercel 环境变量配置

在 Vercel 部署时，需要配置以下环境变量：

| 环境变量                     | 值  |
| ---------------------------- | --- |
| ENABLE_EXPERIMENTAL_COREPACK | 1   |

你可以在 Vercel 项目设置的 Environment Variables 部分进行配置。

## 使用许可

[MIT](https://opensource.org/licenses/MIT) © Guany
