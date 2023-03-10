/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BabelPolyfill = require("@babel/polyfill");

module.exports = {
    entry : {
        main: [
             '@babel/polyfill',
            './src/index.js',
        ]
    },
    output: { 
        filename: 'main.js', 
        path: path.resolve(__dirname, 'dist') 
    },
    plugins: [
        new HtmlWebpackPlugin(
            { 
            title: 'Webpack 4 Starter', 
            template: './src/index.html', 
            inject: true, 
            minify: { 
                removeComments: true, 
                collapseWhitespace: false } 
            }
        ),
        new MiniCssExtractPlugin(
            {filename: 'style.css'}
        ),
        require('autoprefixer'),
        new CopyWebpackPlugin({
            patterns: [
                {from:'./src/assets/images', to:'assets/images'}
            ]
        })
    ],
    resolve: {
        extensions: ['.js', '.ts']
    },
    module: {
        rules: [
            {
                test: [/.js$|.ts$/],
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/typescript'
                        ]
                    }
                }
            },
            {
                test: [/.css$|.scss$/], 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                    'postcss-loader'                
                ]
            },
            { 
                test: [/.(png|jpg|gif|svg)$/], 
                use: [ 
                    { 
                        loader: 'file-loader', 
                        options: { 
                            name: '[name].[ext]', 
                            outputPath: 'assets/images/'
                        } 
                    } 
                ] 
            },
        ]
    },
};
// module.test = [/.js$|.ts$/];