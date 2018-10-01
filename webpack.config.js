var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
const BabiliPlugin = require("babili-webpack-plugin");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  context: path.join(__dirname),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs'], //添加组件的插件配置
        }
      },
      { 
        test: /\.css$/, 
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader"
      }
     
    ]
  },
  output: {
    path: __dirname,
    filename: "./src/bundle.js"
  },
  plugins: [
    //update: new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(), //update: https://github.com/webpack/webpack/issues/1964
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.UglifyJsPlugin({minimize:true, mangle: false, sourcemap: false,
      compress: {
        warnings: false
      }
    }),
    //update: 把入口文件vendors数组指定的第三方包打包成verdors.js
    //new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: './vendor.bundle.js' }),//name: 'vendor', filename: './vendor.bundle.js'
  ]
};
