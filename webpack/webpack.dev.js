import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

import path, { dirname } from "path";
import { fileURLToPath } from "url";

import { merge } from "webpack-merge";
import { common } from "./webpack.common.js";
import FriendlyErrorsWebpackPlugin from "friendly-errors-webpack-plugin";

const __dirname = dirname(fileURLToPath(import.meta.url));

const port = process.env.WEBPACK_DEV_PORT || 3000;

export default merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "./../public"),
    },
    port: port,
    open: false,
    hot: false,
    compress: true,
    historyApiFallback: true,
    devMiddleware: {
      writeToDisk: true,
    },
  },
  plugins: [new FriendlyErrorsWebpackPlugin()],
});
