const path = require('path');

module.exports = {
  mode: 'development', // или 'production'
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'), // указываем корневой каталог для devServer
    },
    port: 8080,
  },
};
