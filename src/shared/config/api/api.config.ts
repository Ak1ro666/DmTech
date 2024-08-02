export const API_URL = {
    root: (url: string = '') => `${url ? url : ''}`,

    products: (url: string = '') => API_URL.root(`/products${url}`),
    categories: (url: string = '') => API_URL.root(`/categories${url}`),
};
