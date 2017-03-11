const path = require('path');
const webpack = require('webpack');

const settings = {
  entry: {
    bundle: [
      "./src/frontend/index.js"
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
          "postcss-loader"
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
    new webpack.NamedModulesPlugin()
  ],
};

module.exports = settings;