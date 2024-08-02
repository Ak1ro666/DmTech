import { ProductSchema } from '@/entities/Product';
import { UserSchema } from '@/entities/User';
import { AxiosInstance } from 'axios';
import { NavigateFunction } from 'react-router-dom';

export interface StateSchema {
    user: UserSchema;
    product: ProductSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
    navigate: NavigateFunction;
}

export interface ThunkApiType<T> {
    rejectWithValue: T;
    extra: ThunkExtraArg;
}
