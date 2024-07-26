import { ReactNode } from 'react';

import { I18nextProvider } from 'react-i18next';

import i18nForTests from '@/shared/config/i18n/i18nForTests.config';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/app/types/global.types';

export interface componentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
}

export const componentRender = (
    component: ReactNode,
    options: componentRenderOptions = {},
) => {
    const { route = '/', initialState } = options;

    return render(
        <StoreProvider initialState={initialState as StateSchema}>
            <I18nextProvider i18n={i18nForTests}>
                <MemoryRouter initialEntries={[route]}>
                    {component}
                </MemoryRouter>
            </I18nextProvider>
        </StoreProvider>,
    );
};
