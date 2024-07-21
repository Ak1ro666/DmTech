import type { Meta, StoryObj } from '@storybook/react';
import { OrdersPage } from './OrdersPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'pages/OrdersPage',
    component: OrdersPage,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof OrdersPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {};
export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
