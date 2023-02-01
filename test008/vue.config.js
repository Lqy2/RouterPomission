const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  transpileDependencies: ['/@yabby-business/'],
  devServer: {
    open: true,
    host: 'localhost',
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3088/',
        changeOrigin: true,
        pathRewrite: {
          '^api': ''
        }
      }
    }
  }
})
