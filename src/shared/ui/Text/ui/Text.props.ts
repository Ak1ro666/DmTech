export const enum TextTheme {
    PRIMARY = 'primary',
    INVERTED_PRIMARY = 'inverted_primary',
    ERROR = 'error',
}

export interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}
