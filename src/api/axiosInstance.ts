import axios, { AxiosInstance } from 'axios';

const apiURL = import.meta.env.VITE_API_URL;
const api: AxiosInstance = axios.create({
	baseURL: apiURL,
});

axios.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default api;
