import { createSlice } from '@reduxjs/toolkit';

import { UserSchema } from '../model/types/userSchema';

const initialState: UserSchema = {
    authData: undefined,
};

export const counterSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
});

export const { actions: userActions } = counterSlice;
export const { reducer: userReducer } = counterSlice;
