const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    filename: "[name].[contenthash].js", // [name] - если подключать несколько скриптов, [contenthash] - чтобы скрипт не кешировался в браузерах
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all", // нужна эта оптимизация если импортим в несколько файлов одни и теже пакеты
    },
  },
  devServer: {
    port: 4200,
  },
  module: {
    rules: [
      // loader позволяют использовать файлы других типов в JS файлах
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /\.{png|jpg|svg|gif}$/,
        use: ["file-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
          "eslint-loader",
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html", // билдит основной html
    }),
    new CleanWebpackPlugin(), // отчищает dist/build папку
    // new CopyWebpackPlugin({
    //   // копирует статические файлы типа иконки из publick в build
    //   patterns: [
    //     {
    //       from: path.resolve(__dirname, "src/assets/AwesomeProject.zip"),
    //       to: path.resolve(__dirname, "build"),
    //     },
    //   ],
    // }),
  ],
};
