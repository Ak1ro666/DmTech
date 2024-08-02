import { $api } from '@/shared/api/interceptors';
import { API_URL } from '@/shared/config/api/api.config';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ProductType } from '../types/productSchema';
import { getProductLimit } from '../selectors/getProductSelectors/getProductSelectors';
import {
    StateSchema,
    ThunkApiType,
} from '@/app/providers/StoreProvider/config/stateSchema';

interface GetProductsProps {
    limit?: number;
    page: number;
}

export const getProducts = createAsyncThunk<
    ProductType[],
    GetProductsProps,
    ThunkApiType<string>
>('getProducts', async (props, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    try {
        const { page = 1 } = props;
        const limit = getProductLimit(getState() as StateSchema);
        const response = await extra.api.get<{ data: ProductType[] }>(
            API_URL.products(`?limit=${limit}&page=${page}`),
        );

        if (!response.data) {
            throw new Error('Error');
        }

        return response.data.data;
    } catch (e) {
        return rejectWithValue('Error');
    }
});
