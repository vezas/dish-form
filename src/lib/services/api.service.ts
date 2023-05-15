import axios from 'axios';

const createAxiosInstance = (baseURL: string) => axios.create({ baseURL });

export const formInstance = createAxiosInstance(`${import.meta.env.VITE_API_URL}`);
