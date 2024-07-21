import { buildCssLoader } from '../../config/build/loaders/buildCssLoader';
import { buildSvgLoader } from '../../config/build/loaders/buildSvgLoader';
import { BuildPaths } from '../../config/build/types/config';
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        entry: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
    };

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.modules.push(paths.src);
    config.resolve.alias = {
        ...config.resolve.alias,
        '@': [paths.src],
    };

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // @ts-ignore
        if (/svg/.test(rule.test)) {
            return { ...rule, exclude: /\.svg$/i };
        }

        return rule;
    });

    config.module.rules.push(buildCssLoader(true));
    config.module.rules.push(buildSvgLoader());

    return config;
};
