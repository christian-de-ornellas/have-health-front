import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.BASE_URL_API,
  timeout: 1000,
});
