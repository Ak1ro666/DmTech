import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export const returnWithRouter = (component: ReactNode) => {
    return <BrowserRouter>{component}</BrowserRouter>;
};
