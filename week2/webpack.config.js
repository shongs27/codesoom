const path = require('path');

module.exports = {
  mode : "development",
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
    compress: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  }, 
};
