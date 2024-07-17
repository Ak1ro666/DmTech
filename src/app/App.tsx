import { Link } from 'react-router-dom';
import { useTheme } from './providers/ThemeProvider';

import { RoutePath } from '@/shared/config/router/router.config';
import { AppRouter } from './providers/AppRouter';
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <Link to={RoutePath.home}>Home</Link>
            <Link to={RoutePath.about}>About</Link>
            <AppRouter />
            <ThemeSwitcher />
        </div>
    );
};
