const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: [
    'vue-class-component',
    'vue-router'
  ]
});

module.exports = {
  publicPath: process.env.NODE_ENV === "production"
    ? "/praxis-website/"
    : "/"
};
