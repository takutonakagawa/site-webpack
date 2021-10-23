const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/assets/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./assets/js/main.js",
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./assets/css/main.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/assets/templates/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
