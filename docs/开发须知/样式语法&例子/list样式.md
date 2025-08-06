---
title: List 样式
author:
  - EmptyDust
date: 2025-08-02
---

# List 样式

## 概述

List 样式用于创建列表组件，支持多种列表项类型，包括普通列表项和路由链接。提供统一的列表展示样式，包含图标、文本、描述和页脚等功能。

## 语法

### `.innenu-list`

列表主容器样式。

```scss
.innenu-list {
  position: relative;
  overflow: hidden;
  padding: 0;
  list-style: none;
  border-radius: 8px;
  background-color: var(--vp-c-control);

  &.noheader {
    margin-top: 8px;
  }
}
```

### `.innenu-list-item`

列表项样式。

```scss
.innenu-list-item {
  position: relative;
  display: flex;
  align-items: center;
  width: auto;
  padding: 0 16px;
  border-radius: 0;
  background-color: var(--vp-c-control);
  color: var(--vp-c-text);
  font-weight: normal;
  font-size: 17px;
  line-height: 1.45;

  &.route-link {
    position: relative;
    padding-right: 30px;

    &::after {
      content: " ";
      position: absolute;
      top: 50%;
      right: 17px;
      display: inline-block;
      width: 7px;
      height: 7px;
      margin-top: -4px;
      border-width: 2px 2px 0 0;
      border-style: solid;
      border-color: var(--vp-c-text-mute);
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    }

    &:hover {
      background-color: var(--vp-c-control-hover) !important;
      text-decoration: none !important;
    }
  }

  &:empty {
    padding: 0;
  }

  &::before {
    content: " ";
    position: absolute;
    right: 0;
    bottom: 0;
    left: 16px;
    height: 1px;
    border-bottom: 1px solid var(--vp-c-border);
    transform: scaleY(0.4);
    transform-origin: 0 100%;
  }

  &:last-child {
    &::before {
      display: none;
    }
  }
}
```

### `.innenu-list-icon`

列表项图标样式。

```scss
.innenu-list-icon {
  width: 30px;
  height: 30px;
  margin: 10px 10px 10px 0;
}
```

### `.innenu-list-detail`

列表项详情容器样式。

```scss
.innenu-list-detail {
  display: flex;
  align-items: center;
  flex: 1;
  padding: 10px 0;
  position: relative;
}
```

### `.innenu-list-text`

列表项文本样式。

```scss
.innenu-list-text {
  flex-grow: 1;
  color: var(--vp-c-text);
  line-height: 1.5;
  text-align: left;
  max-width: 100%;
  word-break: break-word;
}
```

### `.innenu-list-desc`

列表项描述样式。

```scss
.innenu-list-desc {
  flex-shrink: 1;
  overflow: hidden;
  max-width: 40%;
  color: var(--vp-c-text-subtle);
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

### `.innenu-list-footer`

列表页脚样式。

```scss
.innenu-list-footer {
  min-height: 16px;
  margin: 0 16px;
  padding: 5px 16px 0;
  color: var(--vp-c-text-mute);
  font-size: 13px;
  text-align: left;
}
```

## 属性说明

| 类名                           | 主要属性                                          | 说明                       |
| ------------------------------ | ------------------------------------------------- | -------------------------- |
| `.innenu-list`                 | `border-radius: 8px`, `background-color`          | 主容器，圆角边框，背景色   |
| `.innenu-list-item`            | `display: flex`, `align-items: center`            | 列表项，弹性布局，垂直居中 |
| `.innenu-list-item.route-link` | `padding-right: 30px`                             | 路由链接，右侧留空显示箭头 |
| `.innenu-list-icon`            | `width: 30px`, `height: 30px`                     | 图标，固定尺寸             |
| `.innenu-list-detail`          | `display: flex`, `flex: 1`                        | 详情容器，弹性布局         |
| `.innenu-list-text`            | `flex-grow: 1`, `word-break: break-word`          | 文本，自动伸缩，自动换行   |
| `.innenu-list-desc`            | `max-width: 40%`, `text-overflow: ellipsis`       | 描述，限制宽度，省略号     |
| `.innenu-list-footer`          | `font-size: 13px`, `color: var(--vp-c-text-mute)` | 页脚，小字体，主题色       |

## 使用例子

<ul class="innenu-list">
  <li class="innenu-list-item route-link">
    <a href="/上电指南/数码产品建议/电脑选购指南" class="innenu-list-detail">
      <div class="innenu-list-text">电脑选购指南</div>
      <!-- <div class="innenu-list-desc">参考电脑选购指南</div> -->
    </a>
  </li>
</ul>

```html
<ul class="innenu-list">
  <li class="innenu-list-item route-link">
    <a href="/上电指南/数码产品建议/电脑选购指南" class="innenu-list-detail">
      <div class="innenu-list-text">电脑选购指南</div>
      <!-- <div class="innenu-list-desc">参考电脑选购指南</div> -->
    </a>
  </li>
</ul>
```

## 样式特点

### 布局

- 使用 Flexbox 布局，图标、文本和描述水平排列
- 文本自动伸缩，描述固定宽度
- 路由链接右侧显示箭头指示器

### 分隔线

- 每个列表项底部有分隔线
- 最后一个列表项不显示分隔线
- 分隔线使用主题边框色

### 交互

- 路由链接悬停时有背景色变化
- 移除默认的下划线样式
- 保持链接的可访问性

### 响应式

- 描述文本超出时显示省略号
- 文本自动换行，适应不同屏幕尺寸

## 注意事项

- 图标建议使用 30x30 像素的尺寸
- 描述文本建议控制在 40% 宽度以内
- 路由链接会自动添加箭头指示器
- 使用 CSS 变量确保主题一致性
