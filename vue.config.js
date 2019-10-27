const merge = require('webpack-merge')

module.exports = {
    chainWebpack: config => {
        config.module
          .rule('images')
          .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
          .use('url-loader')
          .tap(options => {
            return merge(options, {
              limit: 10000
            })
          })
      }
}