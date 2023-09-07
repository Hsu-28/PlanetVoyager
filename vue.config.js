const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `

          @import "~@/assets/sass/style.scss";
          
        `
      },
    }
  }
})

// https://cli.vuejs.org/zh/config/