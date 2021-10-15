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
      'api/': { // 请求地址固定以 /api 开头的执行以下代理内容
        target: 'http://localhost:8080',       // 访问数据的服务器的地址（后台的接口域名）
        // ws: true,    // 需要代理websockets，配置这个参数，不需要的去掉
        // secure: false,  // 接口协议是https的，配置这个参数，不是的去掉
        // target: 'http://192.168.43.205:8888',
        changeOrigin: true,     // 是否允许其他设备访问，禁用主机检查（是否跨域）
        pathRewrite: {
          ['^/api']: ''   // 这里重写地址，把/api替换为空，则实际访问地址中没有/api，必要这一步
        }
      }
    }
  }

}

