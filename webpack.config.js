'use strict';
// Document：https://www.yuque.com/easy-team/easywebpack 和 https://www.yuque.com/easy-team/egg-vue
module.exports = {
  // egg: true,
  // target: "web", // 只获取前端构建 Webpack 配置（只构建浏览器运行的 JSBundle 文件）
  // framework: "vue", // 指定用 easywebpack-vue 解决方案
  // entry: { cmsMain: "web/project/cms/main.js" },

  // easywebpack 默认配置
  // 在app/web/page 目录下面创建home目录, home.vue 文件, Webpack自动根据.vue文件创建entry入口
  // 注意 只有 entry 文件是 .vue 文件(非.js）时，才会自动使用 vue-entry-loader 模板
  // entry: {
  //   include: ['web/page/**!(component|components|view|views)/*.vue'],
  //   loader: {
  //     client: 'web/framework/entry/template.js',
  //     server: 'web/framework/entry/template.js',
  //   }
  // },
  // entry: 'web/page/**!(component|components|view|views)/*.vue',
  output: {
    publicPath: "public",
  },
  alias: {
    "@asset": "web/asset",
    // "component": "web/component",
    // "framework": "web/framework",
    // "server": 'web/framework/entry/template.js',
    // "client": 'web/framework/entry/template.js',
  },
  plugins: [
    { imagemini: false }
  ],
};