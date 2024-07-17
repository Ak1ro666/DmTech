import { ButtonHTMLAttributes, ReactNode } from 'react';

export const enum ButtonTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    CLEAR = 'clear',
}

export const enum ButtonSize {
    S = 's',
    M = 'm',
    XL = 'xl',
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    square?: boolean;
    theme?: ButtonTheme;
    size?: ButtonSize;
}
