export type BuildMode = 'development' | 'production';

export interface BuildEnv {
    port: number;
    mode: BuildMode;
}

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
    src: string;
}

export interface BuildOptions {
    isDev: boolean;
    paths: BuildPaths;
    mode: BuildMode;
    port: number;
}
