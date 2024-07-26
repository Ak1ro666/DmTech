import { StateSchema } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/app/types/global.types';
import { getUserAuthData } from './getUserAuthData';

describe('getUserAuthData', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { username: 'Anton' } },
        };

        expect(getUserAuthData(state as StateSchema)).toEqual({
            username: 'Anton',
        });
    });
});
