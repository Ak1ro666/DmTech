import webpack from 'webpack';

import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

import { BuildOptions } from './types/config';

export function buildPlugins(
    options: BuildOptions,
): webpack.WebpackPluginInstance[] {
    const { paths, isDev } = options;

    const plugins = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
    ];

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
        plugins.push(new ReactRefreshWebpackPlugin());
    }

    return plugins;
}
