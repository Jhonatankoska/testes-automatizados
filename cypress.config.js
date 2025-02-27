const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://adaptliviu.com.br',
  },
  viewportWidth: 1366,
  viewportHeight: 641,

})

