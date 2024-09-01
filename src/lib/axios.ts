import axios from 'axios';

const baseAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URI,
  withCredentials: true,
});

export default baseAxios;
