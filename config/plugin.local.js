exports.cors = {
  enable: true,
  package: 'egg-cors'
};

// egg-webpack配置
exports.webpack = {
  enable: true,
  package: 'egg-webpack'
};

exports.webpackvue = {
  enable: true,
  package: 'egg-webpack-vue'
};

exports.logview = {
  package: 'egg-logview',
  env: ['local']
};
