import { Sidebar } from '@/widgets/Sidebar';
import { Navbar } from '@/widgets/Navbar';

import { useTheme } from './providers/ThemeProvider';

import { AppRouter } from './providers/AppRouter';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Navbar />
            <div className="content">
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    );
};
