import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button } from '@/shared/ui/Button';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button onClick={toggleTheme}>
            {theme === Theme.DARK ? 'dark' : 'light'}
        </Button>
    );
};
