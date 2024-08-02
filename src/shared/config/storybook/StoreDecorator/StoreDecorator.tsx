import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/app/types/global.types';
import { ReactRenderer } from '@storybook/react/*';
import { PartialStoryFn } from 'storybook/internal/types';

export const StoreDecorator =
    (state: DeepPartial<StateSchema>) =>
    (Story: PartialStoryFn<ReactRenderer>) => {
        <StoreProvider initialState={state}>
            <Story />
        </StoreProvider>;
    };
