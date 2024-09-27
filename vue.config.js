const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/MabinogiCoders.github.io/'  // GitHub Pages에서 사용하는 경로 (레포지토리 이름과 일치)
    : '/'
})
