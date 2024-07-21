import { BrowserRouter } from 'react-router-dom';

// @ts-ignore
export const RouterDecorator = (Story) => (
    <BrowserRouter>
        <Story />
    </BrowserRouter>
);
