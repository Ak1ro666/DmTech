import axios, { CreateAxiosDefaults } from 'axios';
import { SERVER_URL } from '../constants/global.constants';

const options: CreateAxiosDefaults = {
    baseURL: SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
};

export const $api = axios.create(options);
export const $apiWithAuth = axios.create(options);
