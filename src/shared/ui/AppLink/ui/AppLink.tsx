import { Link } from 'react-router-dom';
import { AppLinkProps, AppLinkTheme } from './AppLink.props';
import cn from '@/shared/lib/classNames/classNames';

import styles from './AppLink.module.scss';

export const AppLink = (props: AppLinkProps) => {
    const {
        to,
        theme = AppLinkTheme.PRIMARY,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={cn(styles.AppLink, {}, [styles[theme], className])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};
