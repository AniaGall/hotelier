const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/index.js",
    another: "./src/js/another.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          attributes: {
            list: [
              {
                tag: "img",
                attribute: "src",
                type: "src",
              },
              {
                tag: "img",
                attribute: "data-gallery-src",
                type: "src",
              },
            ],
          },
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          globOptions: {
            ignore: [
              '**/*.DS_Store'
            ],
          },
        },
      ],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/definicje.html",
      inject: true,
      chunks: ["index", "definicje"],
      filename: "definicje.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/np-dok.html",
      inject: true,
      chunks: ["index", "np-dok"],
      filename: "np-dok.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/testy.html",
      inject: true,
      chunks: ["index", "testy"],
      filename: "testy.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/wzory-doc.html",
      inject: true,
      chunks: ["index", "wzory-doc"],
      filename: "wzory-doc.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/zadania.html",
      inject: true,
      chunks: ["index", "zadania"],
      filename: "zadania.html",
    }),
  ],
};
