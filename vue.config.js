module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: 'https://ckan62.bpskalteng.web.id/',
    public: 'localhost:8080'
    // disableHostCheck: true
  }
};
