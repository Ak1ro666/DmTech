import { RouteProps } from 'react-router-dom';

import { OrdersPage } from '@/pages/OrdersPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export const enum AppRouter {
    HOME = 'home',
    ORDERS = 'orders',

    // last app
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.HOME]: '/',
    [AppRouter.ORDERS]: '/orders',

    // last path
    [AppRouter.NOT_FOUND]: '*',
};

export const RouteConfig: Record<AppRouter, RouteProps> = {
    [AppRouter.HOME]: {
        element: <HomePage />,
        path: RoutePath.home,
    },
    [AppRouter.ORDERS]: {
        element: <OrdersPage />,
        path: RoutePath.orders,
    },

    // last route

    [AppRouter.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath.not_found,
    },
};
