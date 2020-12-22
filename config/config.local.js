const path = require('path');
const ip = require('ip');
module.exports = app => {
  const exports = {};

  exports.view = {
    cache: false
  };

  exports.static = {
    maxAge: 0 // maxAge 缓存，默认 1 年
  };

  exports.development = {
    watchDirs: [], // 指定监视的目录（包括子目录），当目录下的文件变化的时候自动重载应用，路径从项目根目录开始写
    ignoreDirs: ['app/web', 'public', 'config/manifest.json'] // 指定过滤的目录（包括子目录）
    // ignoreDirs: ['web', 'public', 'config/manifest.json'] // 指定过滤的目录（包括子目录）
  };

  exports.logview = {
    dir: path.join(app.baseDir, 'logs')
  };

  // egg-webpack配置文档：https://github.com/easy-team/egg-webpack
  exports.webpack = {
    // port: 9000, // 默认9000
    // proxy: {
    //   host: 'http://127.0.0.1:9000', // target host that matched path will be proxy to
    //   match: /^\/public\//, // proxy url path pattern.
    // },
    // 默认是如下配置，可不配置
    // browser: 'http://localhost:7001', // 配置 false 可以关闭自动打开浏览器
    // browser: false, // 禁止自动打开浏览器
    // 本地 npm start 使用
    // webpackConfigList: require('@easy-team/easywebpack-vue').getWebpackConfig({
    //   // devtool: 'source-map',
    //   output: {
    //     publicPath: 'public'
    //   },
    //   plugins: [
    //     {
    //       extract: {env:['dev']}
    //     }
    //   ],
    // })
  };

  const localIP = ip.address();
  const domainWhiteList = [];
  [7001, 9000, 9001].forEach(port => {
    domainWhiteList.push(`http://localhost:${port}`);
    domainWhiteList.push(`http://127.0.0.1:${port}`);
    domainWhiteList.push(`http://${localIP}:${port}`);
  });

  exports.security = { domainWhiteList };

  return exports;
};
