import axios from 'axios';

const baseAxios = axios.create({ baseURL: '/api/' });

export default baseAxios;
