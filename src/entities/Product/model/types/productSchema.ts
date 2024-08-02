export interface ProductType {
    category: string;
    description: string;
    id: string;
    picture: string;
    price: number;
    rating: number;
    title: string;
}

export interface ProductSchema {
    products: ProductType[];
    error?: string;
    isLoading: boolean;

    // pagination
    limit: number;
    page: number;
    hasMore: boolean;
}
