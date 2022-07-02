const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssPlugins = [
  require("precss"),
  require("postcss-preset-env"),
  require("autoprefixer"),
];

module.exports = (env, { mode }) => {
  const cssConfig = {
    test: /\.(scss|css)$/i,
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
      chunkFilename: "[name].chunk.js",
      path: path.resolve(__dirname, "./docs"),
      publicPath:
        mode === "development" ? "/" : "https://anasmost.github.io/table-form/",
      clean: true,
    },
    module: {
      rules: [cssConfig, jsConfig],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/template.html",
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
        plugins: [
          ...config.plugins,
          new MiniCssExtractPlugin({
            filename: "[name].[id].css",
            chunkFilename: "[name].chunk.css",
          }),
        ],
      };
};
