import axios from 'axios';

export const http = axios.create({
  baseURL: 'http://localhost:3333',
  timeout: 1000,
});
