const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
console.log(process.env.NODE_ENV);

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    hot: true
  },
  devtool: false,
  mode: "development",// 最后生成的代码显示格式，开发的还是生产的，默认生产的
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(
      { // 打包输出HTML
        title: 'H5活动页面探究',
        filename: 'index.html',
        template: 'public/index.html',
        hash: true
      }
    ),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css',
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [devMode ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  }
}
