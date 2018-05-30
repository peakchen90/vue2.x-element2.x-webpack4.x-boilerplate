'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

// 项目路径，打包时将项目路径添加到打包根目录后面
let projectPath = ''

module.exports = {

  dev: {
    // 开发代理配置
    proxyTable: {
    },

    /**
     * Various Dev Server settings
     */

    // can be overwritten by process.env.HOST
    // 开发服务 host
    host: 'localhost',
    // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    // 开发服务端口号
    port: 8080,
    // 是否自动打开浏览器
    autoOpenBrowser: false,
    // 当存在编译器错误或警告时，在浏览器中全屏叠加显示
    errorOverlay: true,
    // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    poll: false,

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    // 是否在开发环境编译过程中使用 ESLint
    enableEslintLoader: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    // 当 ESLint 报错时，全屏显示错误信息
    showEslintErrorsInOverlay: true,

    /**
     * Source Maps
     * https://webpack.js.org/configuration/devtool/#development
     */
    enableDevTools: true,
    enableCssSourceMap: true
  },

  build: {
    // Template for index.html for test
    index: path.resolve(__dirname, '../dist', projectPath, 'index.html'),

    /**
     * Paths
     */
    // 打包根目录
    assetsRoot: path.resolve(__dirname, '../dist', projectPath),
    // 打包次级目录（主要用于存放资源文件 js/css/images/...）
    assetsSubDirectory: 'static',
    // 公共路径（会强制加在每个路径前面）
    assetsPublicPath: '',

    /**
     * Source Maps
     * https://webpack.js.org/configuration/devtool/#production
     */
    enableDevTools: true,
    enableCssSourceMap: false,

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: false
  }
}
