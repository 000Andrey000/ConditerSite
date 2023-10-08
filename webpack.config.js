const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebPackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: { index: path.resolve(__dirname, "src", "index.js") },

  output: {
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
    filename: "[name].js",
    chunkFilename: "[id].[chunkhash].js",
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      filename: "index.html",
      inject: "body",
    }),

    new CopyWebPackPlugin({
      patterns: [{ from: path.resolve(__dirname, "src", "img"), to: "img" }],
    }),

    new MiniCssExtractPlugin(),

    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.ContextReplacementPlugin(path.resolve(__dirname, "src")),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },

      {
        test: /\.(png|jpeg|gif|svg|woff|woff2|ttf|eot|ico)$/i,
        // use: [{ loader: "raw-loader" }, { loader: "file-loader" }],
        use: [{ loader: "file-loader" }],
      },


      {
        test: /\.html$/i,
        use: [{ loader: "html-loader" }],
        exclude: [path.resolve(__dirname, "src", "index.html")],
      },
    ],
  },

  optimization: {
    splitChunks: { chunks: "all" },
  },
};