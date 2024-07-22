import { ButtonHTMLAttributes, ReactNode } from 'react';

export const enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED_PRIMARY = 'inverted_primary',
    INVERTED_SECONDARY = 'inverted_secondary',
    CLEAR = 'clear',
    BACKGROUND = 'background',
    INVERTED_BACKGROUND = 'inverted_background',
}

export const enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    XL = 'size_xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    square?: boolean;
    theme?: ButtonTheme;
    size?: ButtonSize;
}
