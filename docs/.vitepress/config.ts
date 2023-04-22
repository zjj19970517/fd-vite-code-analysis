import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vite 技术揭秘",
  description: "探究 Vite 的世界",
  themeConfig: {
    sidebar: [
      {
        text: "前置准备",
        items: [
          { text: "调试环境", link: "/prepare/debug" },
          { text: "项目介绍", link: "/prepare/intro" },
        ],
      },
      {
        text: "核心流程",
        items: [{ text: "启动", link: "/markdown-examples" }],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/zjj19970517/fd-vite-source-code-analysis",
      },
    ],
  },
});
