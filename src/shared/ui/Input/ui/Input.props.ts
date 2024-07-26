import { InputHTMLAttributes } from 'react';

export const enum InputTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    CLEAR = 'clear',
    INVERTED_PRIMARY = 'inverted_primary',
    INVERTED_SECONDARY = 'inverted_secondary',
    INVERTED_CLEAR = 'inverted_clear',
}

export type InputHtmlProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;

export interface InputProps extends InputHtmlProps {
    value?: string;
    onChange?: (value: string) => void;
    theme?: InputTheme;
}
