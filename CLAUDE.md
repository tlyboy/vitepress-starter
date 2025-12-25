# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 VitePress 的中文文档站点启动模板。

## 常用命令

```bash
pnpm dev      # 启动开发服务器
pnpm build    # 构建生产版本
pnpm preview  # 预览构建结果
```

## 项目架构

```
docs/
├── .vitepress/
│   ├── config.ts      # VitePress 配置（导航、侧边栏、主题等）
│   └── theme/
│       ├── index.ts   # 自定义主题入口，扩展默认主题
│       ├── Layout.vue # 自定义布局，实现深色模式切换的圆形扩散动画
│       └── custom.css # 品牌色和首页样式变量
├── index.md           # 首页（使用 home 布局）
└── guide/             # 文档内容目录
```

## 技术要点

- **主题定制**：通过扩展 VitePress 默认主题实现，使用 `provide('toggle-appearance')` 覆盖主题切换行为
- **深色模式动画**：Layout.vue 使用 View Transitions API 实现圆形扩散的主题切换效果
- **品牌色**：在 custom.css 中通过 CSS 变量 `--vp-c-brand-*` 定义

## 环境要求

- Node.js >= 22
- pnpm 10.22.0
