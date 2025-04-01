const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    critical: './src/css/critical.css',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
    hot: true,
    port: 3000,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public/favicon.svg', to: 'favicon.svg' }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['critical', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/team.html',
      filename: 'team.html',
      chunks: ['critical', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/solutions.html',
      filename: 'solutions.html',
      chunks: ['critical', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/contact.html',
      filename: 'contact.html',
      chunks: ['critical', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/faq.html',
      filename: 'faq.html',
      chunks: ['critical', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/thank-you.html',
      filename: 'thank-you.html',
      chunks: ['critical', 'main'],
    }),
    new HtmlWebpackPlugin({
      template: './src/privacy-policy.html',
      filename: 'privacy-policy.html',
      chunks: ['critical', 'main'],
    }),
  ],
};