---
title: Grid 样式
author:
  - EmptyDust
date: 2025-08-02
---

# Grid 样式

## 概述

Grid 样式用于创建网格布局组件，支持响应式设计，在不同屏幕尺寸下自动调整网格项的数量和布局。适用于导航菜单、功能模块等场景。

## 语法

### `.innenu-grid`

网格主容器样式。

```scss
.innenu-grid {
  display: flex;
  flex-wrap: wrap;
}
```

### `.innenu-grid-icon`

网格图标样式。

```scss
.innenu-grid-icon {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  font-size: 20px;
}
```

### `.innenu-grid-item`

网格项样式。

```scss
.innenu-grid-item {
  width: calc(25% - 10px);
  margin: 5px;
  padding: 10px 0;
  border-radius: 6px;
  text-align: center;
  color: var(--vp-c-text);
  background-color: var(--vp-c-control);

  @media (min-width: hope-config.$tablet) {
    width: calc(16.666% - 10px);
  }

  @media (min-width: hope-config.$pc) {
    width: calc(12.5% - 10px);
  }

  &:hover {
    background-color: var(--vp-c-control-hover) !important;
    text-decoration: none !important;
  }
}
```

### `.innenu-grid-text`

网格文本样式。

```scss
.innenu-grid-text {
  color: var(--vp-c-text-mute);
  font-size: 14px;
}
```

### `.innenu-grid-footer`

网格页脚样式。

```scss
.innenu-grid-footer {
  min-height: 16px;
  padding: 5px 16px;
  color: var(--vp-c-text-mute);
  font-size: 13px;
  text-align: left;
}
```

## 属性说明

| 类名                  | 主要属性                                          | 说明                       |
| --------------------- | ------------------------------------------------- | -------------------------- |
| `.innenu-grid`        | `display: flex`, `flex-wrap: wrap`                | 主容器，弹性布局，自动换行 |
| `.innenu-grid-icon`   | `width: 28px`, `height: 28px`, `font-size: 20px`  | 图标，固定尺寸，居中显示   |
| `.innenu-grid-item`   | `width: calc(25% - 10px)`, `border-radius: 6px`   | 网格项，响应式宽度，圆角   |
| `.innenu-grid-text`   | `color: var(--vp-c-text-mute)`, `font-size: 14px` | 文本，主题色，小字体       |
| `.innenu-grid-footer` | `font-size: 13px`, `color: var(--vp-c-text-mute)` | 页脚，小字体，主题色       |

## 响应式断点

| 断点                  | 设备       | 网格项宽度             | 每行项目数 |
| --------------------- | ---------- | ---------------------- | ---------- |
| 默认                  | 移动设备   | `calc(25% - 10px)`     | 4 个       |
| `hope-config.$tablet` | 平板及以上 | `calc(16.666% - 10px)` | 6 个       |
| `hope-config.$pc`     | 桌面及以上 | `calc(12.5% - 10px)`   | 8 个       |

## 使用例子

### 基础网格

<div class="innenu-grid">
  <a href="/新生你好/入学准备/" class="innenu-grid-item">
    <div class="innenu-grid-icon">📋</div>
    <div class="innenu-grid-text">入学准备</div>
  </a>

  <a href="/新生你好/入学准备/" class="innenu-grid-item">
    <div class="innenu-grid-icon">📚</div>
    <div class="innenu-grid-text">入学教育</div>
  </a>

  <a href="/新生你好/需带物品/" class="innenu-grid-item">
    <div class="innenu-grid-icon">📦</div>
    <div class="innenu-grid-text">需带物品</div>
  </a>

  <a href="/新生你好/入学活动/" class="innenu-grid-item">
    <div class="innenu-grid-icon">🎉</div>
    <div class="innenu-grid-text">入学活动</div>
  </a>
</div>

### 效果

- 网格项自动换行，响应式布局
- 图标居中显示，文本位于图标下方
- 悬停时有背景色变化效果
- 不同屏幕尺寸下自动调整每行项目数
- 圆角边框，现代化的外观

## 样式特点

### 布局

- 使用 Flexbox 布局，支持自动换行
- 网格项等宽分布，响应式调整
- 图标和文本垂直居中对齐

### 响应式

- 移动设备：每行 4 个项目
- 平板设备：每行 6 个项目
- 桌面设备：每行 8 个项目

### 交互

- 悬停时背景色变化
- 移除默认的下划线样式
- 保持链接的可访问性

### 主题适配

- 使用 CSS 变量确保主题一致性
- 背景色和文字颜色都使用主题变量
- 支持明暗主题切换

## 注意事项

- 图标建议使用 28x28 像素的尺寸
- 文本内容应该简洁明了
- 网格项数量建议控制在合理范围内
- 确保在不同设备上的良好显示效果
- 使用 CSS 变量确保主题一致性
