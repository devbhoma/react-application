import * as path from "path";
import * as fs from "fs";

//import ConfigWebpackPlugin from "config-webpack";
import HtmlWebpackPlugin = require("html-webpack-plugin");
import process = require("process");
import CopyWebpackPlugin = require( 'copy-webpack-plugin' );
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import { Configuration as WebpackConfiguration, DefinePlugin } from "webpack";
import { Configuration as WebpackDevServerConfiguration } from "webpack-dev-server";
import MiniCssExtractPlugin = require("mini-css-extract-plugin");

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration;
}

const hash_key = (Math.random() + 1).toString(36).substring(5);
console.log("hash_key:", hash_key)
const config: Configuration = {
    entry: [
        path.join(__dirname, "src", "stylesheet", "main.scss"),
        path.join(__dirname, "src", "store", "index.ts"),
        path.join(__dirname, "src", "index.tsx"),
    ],
    devServer: {
        static: path.join(__dirname, "build"),
        compress: true,
        port: 2200,
        hot: false, // auto reload disabled
        liveReload: false, // auto reload disabled
        webSocketServer: false,
        historyApiFallback: {
            disableDotRule: true // allow dots in url
        },
    },
    devtool: 'source-map',
    mode: process.env.NODE_ENV === "development" ? "development" : "production",
    module: {
        rules: [
            {
                test: /\.(tsx|ts|jsx|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset/resource",
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss|css)/i,
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".svg", ".png", ".jpg", "jpeg"],
        alias: {
            "config": path.resolve(__dirname, "config"),
            "store": path.resolve(__dirname, "src", 'store'),
            "core": path.resolve(__dirname, "src", 'core'),
            "views": path.resolve(__dirname, "src", 'views'),
            "stylesheet": path.resolve(__dirname, "src", "stylesheet"),
            "assets": path.resolve(__dirname, "src", "assets"),
        },
        modules: [
            __dirname,
            path.join(__dirname),
            'node_modules',
        ],
    },
    output: {
        path: path.resolve("build"),
        // publicPath: "/",
        filename: `[name].${hash_key}.${ process.env.NODE_ENV }.bundle.min.js`,
        chunkFilename: `[id].${hash_key}.${ process.env.NODE_ENV }.bundle.min.js`,
        devtoolModuleFilenameTemplate: 'app:///[resource-path]',
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            filename: path.resolve(__dirname, "build", "index.html"),
        }),

        /*new MiniCssExtractPlugin( {
            filename: '[name].css',
            chunkFilename: "[id].css"
        }),*/
        new MiniCssExtractPlugin( {
            filename: `[name].${hash_key}.css`
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve( __dirname, "src", "assets" ),
                    to: path.resolve( __dirname, "build", "assets")
                }
            ],
        }),
        new DefinePlugin({ "process.env": JSON.stringify(process.env) })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                default: false,
                vendors: false,
                vendor: {
                    chunks: 'all',
                    name: 'vendor',
                    test: /node_modules/,
                }
            }
        }
    },
};

export default config;
