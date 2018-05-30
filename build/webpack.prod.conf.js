'use strict'
const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const config = require('./config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpackConfig = merge(baseWebpackConfig, {
  // process.env.NODE_ENV = 'production'
  // 启用以下插件：
  // FlagDependencyUsagePlugin、FlagIncludedChunksPlugin
  // ModuleConcatenationPlugin、NoEmitOnErrorsPlugin、
  // OccurrenceOrderPlugin、SideEffectsFlagPlugin、UglifyJsPlugin
  mode: 'production',

  output: {
    path: config.build.assetsRoot,
    publicPath: config.build.assetsPublicPath,
    filename: utils.assetsPath('js/[name].[chunkhash:10].js'),
    chunkFilename: utils.assetsPath('js/[id].[chunkhash:10].js')
  },

  optimization: {
    // 压缩配置
    minimizer: [

      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            warnings: false
          }
        },
        sourceMap: config.build.enableDevTools,
        parallel: true
      }),

      new OptimizeCSSPlugin({
        cssProcessorOptions: config.build.enableCssSourceMap
          ? { safe: true, map: { inline: false } }
          : { safe: true }
      })
    ],

    // manifest
    runtimeChunk: 'single',

    // 分块条件
    splitChunks: {
      chunks: "all",
      // 引用模块大小最小为 20kb
      minSize: 20000,
      // 引用次数最少为 1 次
      minChunks: 1,
      // 按需加载最大请求次数为 10
      maxAsyncRequests: 10,
      // 初始化加载最大请求次数为 3
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        // 通过 node_modules 引入的模块（js/css），会分别打包为公共文件
        vendor: {
          name: 'vendor',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'all'
        },
      }
    }
  },

  module: {
    rules: utils.styleLoaders({
      sourceMap: config.build.enableCssSourceMap,
      extract: true,
      usePostCSS: true
    })
  },

  devtool: config.build.enableDevTools ? 'source-map' : false,

  plugins: [
    // keep module.id stable when vendor modules does not change
    new webpack.HashedModuleIdsPlugin(),

    new webpack.NamedChunksPlugin(chunk => chunk.name),
    // new webpack.optimize.SplitChunksPlugin(),

    new MiniCssExtractPlugin({
      filename: utils.assetsPath('css/[name].[contenthash:10].css'),
      chunkFilename: utils.assetsPath('css/[id].[contenthash:10].css')
    })
  ]
})

if (config.build.productionGzip) {
  const CompressionWebpackPlugin = require('compression-webpack-plugin')

  webpackConfig.plugins.push(
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: new RegExp(
        '\\.(' +
        config.build.productionGzipExtensions.join('|') +
        ')$'
      ),
      threshold: 10240,
      minRatio: 0.8
    })
  )
}

if (config.build.bundleAnalyzerReport) {
  const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
  webpackConfig.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = webpackConfig
