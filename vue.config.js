// vue.config.js
module.exports = {
  // 选项...
  baseUrl:"./",
  outputDir:"dist",
  assetsDir:"assets",
  indexPath:"index.html",
  filenameHashing:true,
  pages:undefined,
  lintOnSave:true,
  runtimeCompiler:false,
  transpileDependencies:[],
  productionSourceMap:false,
  crossorigin:undefined,
  integrity:false,
  devServer: {//代理
    port: 8081,
  },
  css: {}
}
