import { StateSchema } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/app/types/global.types';
import { getProductData } from './getProductData';

describe('getProductData.test', () => {
    test('Should return value', () => {
        const state: DeepPartial<StateSchema> = {
            product: { isLoading: true },
        };
        expect(getProductData(state as StateSchema)).toEqual({
            isLoading: true,
        });
    });
});
