import { RouteProps } from 'react-router-dom';

import { AboutPage } from '@/pages/AboutPage';
import { HomePage } from '@/pages/HomePage';

export const enum AppRouter {
    HOME = 'home',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.HOME]: '/',
    [AppRouter.ABOUT]: '/about',
};

export const RouteConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.HOME]: {
        element: <HomePage />,
        path: RoutePath.home,
    },
    [AppRouter.ABOUT]: {
        element: <AboutPage />,
        path: RoutePath.about,
    },
};
