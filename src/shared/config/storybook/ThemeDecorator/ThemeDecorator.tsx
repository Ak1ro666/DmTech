import { Theme } from '@/app/providers/ThemeProvider';

// @ts-ignore
export const ThemeDecorator = (theme: Theme) => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
