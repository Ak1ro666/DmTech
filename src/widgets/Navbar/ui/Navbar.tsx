import cn from '@/shared/lib/classNames/classNames';

import styles from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { RoutePath } from '@/shared/config/router/router.config';

import DarkCartIcon from '@/shared/assets/icons/cart-dark.svg';
import LightCartIcon from '@/shared/assets/icons/cart-light.svg';
import logo from '@/shared/assets/icons/logo.png';

import { useState } from 'react';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [state] = useState(12);
    const { t } = useTranslation();
    const { theme } = useTheme();

    return (
        <div
            data-testid="navbar"
            className={cn(styles.Navbar, {}, [className])}
        >
            <AppLink to={RoutePath.home} className={styles.logo}>
                <img src={logo} alt="logo" />
            </AppLink>
            <div className={styles.links}>
                <AppLink
                    theme={AppLinkTheme.INVERTED_PRIMARY}
                    to={RoutePath.home}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.INVERTED_PRIMARY}
                    to={RoutePath.orders}
                >
                    {t('Заказы')}
                </AppLink>
            </div>
            <AppLink
                theme={AppLinkTheme.INVERTED_PRIMARY}
                to={RoutePath.home}
                className={styles.cart}
            >
                {theme === Theme.DARK ? <DarkCartIcon /> : <LightCartIcon />}
                <p>
                    {t('Корзина')} ({state})
                </p>
            </AppLink>
        </div>
    );
};
