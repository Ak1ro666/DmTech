import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const babelLoader = {
        test: /\.m?(jsx,ts,tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env'],
            },
        },
    };

    const fileLoader = {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
    };

    const cssLoader = buildCssLoader(isDev);

    const svgLoader = buildSvgLoader();

    return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader];
}
