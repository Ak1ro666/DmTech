import { RouteProps } from 'react-router-dom';

import { OrdersPage } from '@/pages/OrdersPage';
import { HomePage } from '@/pages/HomePage';

export const enum AppRouter {
    HOME = 'home',
    ORDERS = 'orders',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.HOME]: '/',
    [AppRouter.ORDERS]: '/orders',
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
};
