const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.tsx",
  ...(process.env.production || !process.env.development
    ? {}
    : {
        devtool: "eval-source-map",
      }),
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    plugins: [
      new TsconfigPathsPlugin({
        baseUrl: __dirname,
        configFile: "./tsconfig.json",
      }),
    ],
  },
  output: {
    path: path.join(__dirname, "/build"),
    filename: "build.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true,
        },
        exclude: /build/,
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    hot: true,
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      hash: true,
      favicon: "public/favicon.ico",
      filename: "index.html",
      manifest: "public/manifest.json",
    }),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: "static",
    }),
    // DefinePlugin allows you to create global constants which can be configured at compile time
    new webpack.DefinePlugin({
      "process.env": process.env.production || !process.env.development,
    }),
    new ForkTsCheckerWebpackPlugin({
      // Speeds up TypeScript type checking and ESLint linting (by moving each to a separate process)
      eslint: {
        files: "./src/**/*.{ts,tsx,js,jsx}",
      },
    }),
  ],
};
