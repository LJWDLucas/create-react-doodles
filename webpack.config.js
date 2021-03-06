const path = require('path');
const HTMLWP = require('html-webpack-plugin');

const htmlwpc = new HTMLWP({
  template: path.join(__dirname, '/react-app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: path.join(__dirname, '/react-app', 'index.jsx'),
  module: {
    rules: [
      {
        test: /\.(js$|jsx)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: true
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/build')
  },
  plugins: [htmlwpc],
  resolve: {
    extensions: ['.js', '.jsx']
  },
};
