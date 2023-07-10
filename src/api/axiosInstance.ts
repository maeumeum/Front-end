import axios, { AxiosInstance } from 'axios';

import { DataType } from '@src/types/dataType';

const apiURL = import.meta.env.VITE_API_URL;
const api: AxiosInstance = axios.create({
	baseURL: apiURL,
});

api.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		if (error.response && error.response.status === 401) {
			try {
				await api.get<DataType>('/api/refresh', {
					withCredentials: true,
				});
			} catch (refreshError) {
				console.log('Refresh 토큰 요청 실패:', refreshError);
			}
		}
		return Promise.reject(error);
	},
);

export default api;
