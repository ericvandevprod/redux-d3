const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

const settings = {
  entry: {
    bundle: [
      "./src/app/index.js"
    ]
  },
  output: {
    filename: "bundle.js",
    publicPath: "/",
    path: __dirname
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".css"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          compact: false,
          presets: [
            ["es2015", { modules: false }],
            "stage-2",
            "react"
          ],
          plugins: [
            "transform-node-env-inline"
          ]
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader",
          'sass-loader?sourceMap&sourceMapContents&outputStyle=expanded',
        ]
      },
    ]
  },
  devServer: {
    contentBase: path.resolve("src/www"),
    publicPath: "http://localhost:8080/",
    quiet: false,
    hot: false,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new Dotenv({
      path: './.env',
      safe: false
    })
  ],
};

module.exports = settings;