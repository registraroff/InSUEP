import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  // favicon: "/favicon.ico",
  logo: "/logo.jpg",
  hostname: "https://insuep.emptydust.com",
  repo: "https://github.com/EmptyDust/InSUEP",
  docsBranch: "debug",

  docsDir: "docs",
  editLinkPattern: ":repo/edit/:branch/:path",

  footer:
    "CC BY-NC-ND 4.0 Licensed | Copyright © 2025 InSUEP | <a href='https://beian.miit.gov.cn/' target='_blank' rel='noopener noreferrer'>沪ICP备2025118581号-1</a>",
  copyright: "Copyright © 2025 InSUEP",
  displayFooter: true,

  darkmode: "toggle",

  navbar: [
    {
      text: "首页",
      link: "/",
      icon: "home",
    },
    {
      text: "序言",
      link: "/序言/Preface.md",
      icon: "book-open",
    },
    {
      text: "新生你好",
      link: "/新生你好/README.md",
      icon: "bed",
    },
    {
      text: "上电指南",
      link: "/上电指南/",
      icon: "calendar-day",
    },
    {
      text: "学院与专业介绍",
      link: "/学院与专业介绍/",
      icon: "laptop-code",
    },
    {
      text: "学校机构",
      link: "/学校机构/",
      icon: "building",
    },
    {
      text: "老生入门",
      link: "/老生入门/",
      icon: "book",
    },
    {
      text: "开发须知",
      link: "/开发须知/",
      icon: "file-code",
    },
  ],

  sidebar: {
    "/": false,
    "/序言/": "structure",

    // 新生指南相关页面
    "/新生你好/": "structure",

    // 校园生活相关页面
    "/上电指南/": "structure",

    // 专业介绍相关页面
    "/学院与专业介绍/": "structure",

    // 学校机构相关页面
    "/学校机构/": "structure",

    // 考研就业相关页面
    "/老生入门/": "structure",

    // 开发须知相关页面
    "/开发须知/": "structure",
  },

  pageInfo: ["Author", "Original", "Date", "PageView", "ReadingTime", "Word"],

  pure: true,

  metaLocales: {
    date: "更新日期",
  },

  markdown: {
    align: true,
    attrs: true,
    figure: true,
    linksCheck: false,
    mermaid: true,
  },

  plugins: {
    copyright: {
      // disableCopy: process.env.NODE_ENV !== "development",
      // disableSelection: process.env.NODE_ENV !== "development",
      global: true,
      author: "InSUEP Team",
      license: "CC BY-NC-ND 4.0",
    },

    components: {
      components: ["VidStack"],
    },

    icon: {
      assets: "fontawesome",
    },

    search: {
      locales: {
        "/": {
          placeholder: "搜索文档...",
        },
      },
      maxSuggestions: 10,
      hotKeys: ["s", "/"],
    },
  },
});
