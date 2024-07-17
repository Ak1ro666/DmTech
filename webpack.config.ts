import webpack from 'webpack';

import path from 'path';

import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths, BuildMode } from './config/build/types/config';

export default (env: BuildEnv): webpack.Configuration => {
    const mode: BuildMode = env.mode || 'development';
    const isDev = mode === 'development';
    const PORT = env.port || 5000;
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'dist'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const config = buildWebpackConfig({
        mode,
        isDev,
        port: PORT,
        paths,
    });
    return config;
};
