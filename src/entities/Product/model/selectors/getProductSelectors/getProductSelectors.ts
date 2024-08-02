import { StateSchema } from '@/app/providers/StoreProvider';

export const getProductIsLoading = (state: StateSchema) =>
    state.product.isLoading;
export const getProductError = (state: StateSchema) => state.product.error;
export const getProductItems = (state: StateSchema) => state.product.products;
export const getProductLimit = (state: StateSchema) => state.product.limit;
export const getProductPage = (state: StateSchema) => state.product.page;
export const getProductHasMore = (state: StateSchema) => state.product.hasMore;
