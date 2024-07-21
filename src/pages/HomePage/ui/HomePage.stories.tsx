import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'pages/HomePage',
    component: HomePage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof HomePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
