const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

require("dotenv").config();

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  mode: isDevelopment ? "development" : "production",
  entry: "./src/index.tsx",
  devServer: {
    hot: true,
    proxy: {
      "/api/questions": {
        target: process.env.API_HOST,
        changeOrigin: true,
        secure: false,
        pathRewrite: { "^/api/questions": "" },
      },
      port: process.env.PORT,
    },
  },
  target: "web",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    isDevelopment && new webpack.HotModuleReplacementPlugin(),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.ts$|tsx/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
        options: {
          plugins: [
            isDevelopment && require.resolve("react-refresh/babel"),
          ].filter(Boolean),
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        dependency: { not: ['url'] },
      },
    ],
  },
};
