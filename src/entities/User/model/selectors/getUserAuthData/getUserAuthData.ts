import { createSelector } from '@reduxjs/toolkit';
import { getUser } from '../getUser/getUser';
import { UserSchema } from '../../types/userSchema';

export const getUserAuthData = createSelector(
    getUser,
    (user: UserSchema) => user.authData,
);
