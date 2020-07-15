module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "import",
      /**
       * 本项目基于vuecli4，这边配置跟官网有点区别，否则影响组件样式
       */
      {
        libraryName: "ant-design-vue",
        libraryDirectory: "es",
        style: "css"
      }
    ]
  ]
};
