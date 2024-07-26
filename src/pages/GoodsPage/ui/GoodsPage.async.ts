import { lazy } from 'react';

export const GoodsPageAsync = lazy(() =>
    import('./GoodsPage').then((module) => ({ default: module.GoodsPage })),
);
