import { StateSchema } from '@/app/providers/StoreProvider';
import { DeepPartial } from '@/app/types/global.types';
import { getUser } from './getUser';

describe('getUser', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            user: { authData: { username: 'Anton' } },
        };

        expect(getUser(state as StateSchema)).toEqual({
            authData: { username: 'Anton' },
        });
    });
});
