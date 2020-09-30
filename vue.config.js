module.exports = {
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    // 设计稿宽度的1/10，一般为75
                    require('postcss-px2rem')({remUnit: 75}),
                ]
            }
        }
    } ,
    lintOnSave:false,
    devServer:{
        proxy: {
            '/api': { 
              target: 'https://api.juooo.com',
              changeOrigin: true,
              pathRewrite:{
                  "^/api":""
              }
            }
          }
    }  
}