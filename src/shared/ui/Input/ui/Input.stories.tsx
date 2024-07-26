import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { InputTheme } from './Input.props';

const meta = {
    title: 'shared/Input',
    component: Input,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
    args: {
        theme: InputTheme.PRIMARY,
        value: 'TEST',
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: InputTheme.INVERTED_PRIMARY,
        value: 'TEST',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryLight: Story = {
    args: {
        theme: InputTheme.SECONDARY,
        value: 'TEST',
    },
};

export const SecondaryDark: Story = {
    args: {
        theme: InputTheme.INVERTED_SECONDARY,
        value: 'TEST',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
export const ClearLight: Story = {
    args: {
        theme: InputTheme.CLEAR,
        value: 'TEST',
    },
};

export const ClearDark: Story = {
    args: {
        theme: InputTheme.INVERTED_CLEAR,
        value: 'TEST',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
