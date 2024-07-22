import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';
import { ButtonSize, ButtonTheme } from './Button.props';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: { onClick: fn(), size: ButtonSize.M },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'TEST',
        theme: ButtonTheme.PRIMARY,
    },
};

export const Secondary: Story = {
    args: {
        children: 'TEST',
        theme: ButtonTheme.SECONDARY,
    },
};

export const Clear: Story = {
    args: {
        children: 'TEST',
        theme: ButtonTheme.CLEAR,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
    },
};

export const SquareSizeS: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.S,
    },
};

export const SquareSizeM: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.M,
    },
};

export const SquareSizeXl: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.XL,
    },
};
export const SquareSizeSDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.S,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeMDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.M,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareSizeXlDark: Story = {
    args: {
        children: '>',
        theme: ButtonTheme.PRIMARY,
        square: true,
        size: ButtonSize.XL,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SquareDark: Story = {
    args: {
        children: '<',
        theme: ButtonTheme.PRIMARY,
        square: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const PrimaryDark: Story = {
    args: {
        children: 'TEST',
        theme: ButtonTheme.PRIMARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const SecondaryDark: Story = {
    args: {
        children: 'TEST',
        theme: ButtonTheme.SECONDARY,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const ClearDark: Story = {
    args: {
        children: 'TEST',
        theme: ButtonTheme.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
