const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  filenameHashing:false,
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `

          @import "~@/assets/sass/style.scss";
          
        `
      },
    }
  },
  
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'production'
    ? '/chd103/g3/planet_voyager/'
    : '/',
    outputDir: 'planet_voyager'
  
})

// https://cli.vuejs.org/zh/config/