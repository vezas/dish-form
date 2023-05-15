import axios from 'axios';

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({ baseURL });

  return instance;
};

export const formInstance = createAxiosInstance(`${import.meta.env.VITE_API_URL}`);
