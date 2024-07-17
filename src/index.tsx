import { createRoot } from 'react-dom/client';

import { App } from './app/App';

import { ErrorBoundary } from './app/providers/ErrorBoundary';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { BrowserRouter } from 'react-router-dom';

import './app/styles/index.scss';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
    <ErrorBoundary>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </ErrorBoundary>,
);