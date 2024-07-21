import { LinkProps } from 'react-router-dom';

export const enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    INVERTED_PRIMARY = 'inverted_primary',
    INVERTED_SECONDARY = 'inverted_secondary',
    CLEAR = 'clear',
}

export interface AppLinkProps extends LinkProps {
    theme?: AppLinkTheme;
}
