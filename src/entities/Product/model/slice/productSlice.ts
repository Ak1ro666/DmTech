import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductType, ProductSchema } from '../types/productSchema';
import { getProducts } from '../services/getProducts';

const initialState: ProductSchema = {
    isLoading: false,
    error: undefined,
    products: [],
    limit: 15,
    page: 1,
    hasMore: true,
};

export const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {
        setPage: (state, { payload }: PayloadAction<number>) => {
            state.page = payload;
        },
    },
    extraReducers: (builder) =>
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                getProducts.fulfilled,
                (state, { payload }: PayloadAction<ProductType[]>) => {
                    state.isLoading = false;
                    state.products = [...state.products, ...payload];
                    state.hasMore = payload.length > 0;
                },
            )
            .addCase(getProducts.rejected, (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }),
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;
