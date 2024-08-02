import { Link } from 'react-router-dom';
import { AppLinkProps, AppLinkTheme } from './AppLink.props';
import cn from '@/shared/lib/classNames/classNames';

import { memo } from 'react';

import styles from './AppLink.module.scss';
import { NavLink } from 'react-router-dom';

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to,
        theme = AppLinkTheme.PRIMARY,
        className,
        children,
        navbar,
        ...otherProps
    } = props;

    return navbar ? (
        <NavLink
            to={to}
            className={cn(styles.AppLink, {}, [styles[theme], className])}
            {...otherProps}
        >
            {children}
        </NavLink>
    ) : (
        <Link
            to={to}
            className={cn(styles.AppLink, {}, [styles[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
