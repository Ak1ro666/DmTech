import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
    title: 'widgets/LangSwitcher',
    component: LangSwitcher,
    parameters: {},
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof LangSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LightLong: Story = {
    args: {
        shortLang: false,
    },
};

export const LightShort: Story = {
    args: {
        shortLang: true,
    },
};

export const DarkLong: Story = {
    args: {
        shortLang: false,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const DarkShort: Story = {
    args: {
        shortLang: true,
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
