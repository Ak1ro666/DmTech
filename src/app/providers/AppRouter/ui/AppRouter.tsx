import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

import { RouteConfig } from '@/shared/config/router/router.config';
import { PageLoader } from '@/widgets/PageLoader';

export const AppRouter = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {Object.values(RouteConfig).map((route) => (
                    <Route
                        key={route.path}
                        element={route.element}
                        path={route.path}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};
