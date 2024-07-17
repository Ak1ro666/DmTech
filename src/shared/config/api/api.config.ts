export const ROUTE_API = {
    root: (url: string = '') => `${url ? url : ''}`,

    auth: (url: string = '') => ROUTE_API.root(`/auth${url ? '/' + url : ''}`),
};
