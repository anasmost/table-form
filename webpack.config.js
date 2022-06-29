const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPlugins = [
  require("postcss-preset-env"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = (env, { mode }) => {
  const cssConfig = {
    test: /\.(sass|css)$/i,
    use: [
      mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
      "css-loader",
      {
        loader: "postcss-loader",
        options: {
          postcssOptions: {
            plugins: postcssPlugins,
          },
        },
      },
    ],
  };

  const jsConfig = {
    test: /\.js$/,
    exclude: /(node_modules)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
      },
    },
  };

  const config = {
    entry: "./src/index.js",
    output: {
      filename: "[name].[id].js",
      path: path.resolve(__dirname, "./dist"),
      publicPath: "/",
      clean: true,
    },
    module: {
      rules: [cssConfig, jsConfig],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.html",
      }),
    ],
  };

  return mode === "development"
    ? {
        ...config,
        devtool: "source-map",
        devServer: {
          static: "./dist",
          compress: true, // enable gzip compression
          historyApiFallback: true, // true for index.html upon 404, object for multiple paths
          hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
          open: true,
        },
      }
    : {
        ...config,
        plugins: [...config.plugins, new MiniCssExtractPlugin()],
      };
};