import axios from 'axios';

const baseAxios = axios.create({ baseURL: '/api/', withCredentials: true });

export default baseAxios;
