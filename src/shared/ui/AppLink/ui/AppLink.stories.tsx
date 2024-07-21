import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { AppLinkTheme } from './AppLink.props';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: { to: '/' },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEST',
        theme: AppLinkTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'TEST',
        theme: AppLinkTheme.SECONDARY,
    },
};

export const Clear: Story = {
    args: {
        children: 'TEST',
        theme: AppLinkTheme.CLEAR,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'TEST',
        theme: AppLinkTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
    args: {
        children: 'TEST',
        theme: AppLinkTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearDark: Story = {
    args: {
        children: 'TEST',
        theme: AppLinkTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
