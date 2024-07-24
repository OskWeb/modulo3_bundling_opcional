import common from "./webpack.common.js";
import path from "path";
import url from "url";
import { merge } from "webpack-merge";
import Dotenv from "dotenv-webpack";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "eval-source-map",
  devServer: {
    port: 8081,
    open: true,
    hot: true,
    static: {
      directory: path.join(__dirname, "src"),
    },
    devMiddleware: {
      stats: "errors-only",
    },
  },
  plugins: [
    new Dotenv({
      path: "./.env.development",
    }),
  ],
});
