import { RouteProps } from 'react-router-dom';

import { OrdersPage } from '@/pages/OrdersPage';
import { HomePage } from '@/pages/HomePage';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { GoodsPage } from '@/pages/GoodsPage';

export const enum AppRouter {
    HOME = 'home',
    ORDERS = 'orders',
    GOODS = 'goods',

    // last app
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRouter, string> = {
    [AppRouter.HOME]: '/',
    [AppRouter.ORDERS]: '/orders',
    [AppRouter.GOODS]: '/goods',

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
    [AppRouter.GOODS]: {
        element: <GoodsPage />,
        path: RoutePath.goods,
    },

    // last route

    [AppRouter.NOT_FOUND]: {
        element: <NotFoundPage />,
        path: RoutePath.not_found,
    },
};
