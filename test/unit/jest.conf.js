const path = require('path');

/**
 * jest 配置
 * @see https://facebook.github.io/jest/docs/zh-Hans/configuration.html
 */
module.exports = {
  // https://facebook.github.io/jest/docs/zh-Hans/configuration.html#rootdir-string
  // 项目根目录，其他路径可以引用 '<rootDir>' 作为基本路径
  rootDir: path.resolve(__dirname, '../../'),
  // 匹配到的文件将执行测试
  testRegex: '/test/.*?\\.(test|spec)\\.jsx?$',
  // 类似 webpack 的 resolve.extensions
  moduleFileExtensions: [
    'js',
    'json',
    'vue',
  ],
  // 模块名映射，类似 webpack 的 类似 webpack 的 resolve.alias
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    '^@/(.*)$': '<rootDir>/src/components/$1',
  },
  // 指定相应的模块（提供一个同步方法）处理相应格式的文件
  transform: {
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
  },
  // https://facebook.github.io/jest/docs/zh-Hans/tutorial-react-native.html#snapshot-test
  // 快照测试 vue模块
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  // 每次测试前执行，一般用于执行区分其他环境的代码
  setupFiles: ['<rootDir>/test/unit/setup'],
  // 是否搜集覆盖率信息
  collectCoverage: false,
  // Jest输出覆盖信息文件的目录
  coverageDirectory: '<rootDir>/test/unit/coverage',
  // 匹配的文件将收集覆盖率
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
    '!src/router/index.js',
    '!**/node_modules/**',
  ],
};
