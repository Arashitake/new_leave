module.exports = {
  publicPath: process.env.NODE_ENV === 'production'?'./':'/',  // 根目录（防止打包后出错）
  outputDir: 'dist',      // 打包后的目录名称
  assetsDir: 'assets',    // 静态资源目录名称
  // parallel: false,
  configureWebpack: {
    resolve: {
      alias: {
        // @ 默认是 src，设置别名后，就不用'./'了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store': '@/store'
      }
    }
  },
  // 反向代理
  devServer: {
    port: 1234,    //端口号
    disableHostCheck: true,   //是否可以被其他设备访问
    proxy: {
      'api/': {
        target: 'http://localhost:8080',       // 访问数据的服务器的地址
        // target: 'http://192.168.43.205:8888',
        changeOrigin: true,     // 是否允许其他设备访问，禁用主机检查
        pathRewrite: {
          '^/api':''   // 替换掉api
        }
      }
    }
  }

}

