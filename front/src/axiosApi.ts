import axios from 'axios';
import { apiUrl } from './globalConstants.ts';

export const axiosApi = axios.create({
  baseURL: apiUrl,
});
