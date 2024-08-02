import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import { Button, ButtonSize } from '@/shared/ui/Button';
import { memo } from 'react';

export const ThemeSwitcher = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button size={ButtonSize.S} onClick={toggleTheme}>
            {theme === Theme.DARK ? 'dark' : 'light'}
        </Button>
    );
});
