module.exports = {
  proxy: {
    '/apis': {
      target: 'https://www.runoob.com',   //接口的域名
      ws: true,   //是否代理websocket
      secure: false,    //如果是https请求, 需要此参数
      changeOrigin: true,   //是否跨域
      pathRewrite: {
        '^/apis': ''
      }
    }
  }
}