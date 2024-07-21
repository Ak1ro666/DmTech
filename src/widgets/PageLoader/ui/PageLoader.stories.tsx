import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'widgets/PageLoader',
    component: PageLoader,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof PageLoader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
