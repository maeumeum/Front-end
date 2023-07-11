import { AxiosRequestConfig } from 'axios';
import api from '@api/axiosInstance';
const apiURL = import.meta.env.VITE_API_URL;

// axios.get
export const get = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const fullURL = apiURL + url;
	try {
		const response = await api.get<T>(fullURL, {
			...config,
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw new Error((err as any).response.data.name);
	}
};

// axios.post
export const post = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<T> => {
	const fullURL = apiURL + url;
	try {
		const response = await api.post<T>(fullURL, data, {
			...config,
			withCredentials: true,
		});
		return response.data;
	} catch (err) {
		throw new Error((err as any).response.data.name);
	}
};

// axios.patch
export const patch = async <T>(
	url: string,
	data?: any,
	config?: AxiosRequestConfig,
): Promise<void> => {
	const fullURL = apiURL + url;
	try {
		await api.patch<T>(fullURL, data, {
			...config,
			withCredentials: true,
		});
	} catch (err) {
		throw new Error((err as any).response.data.name);
	}
};

// axios.delete
export const del = async <T>(
	url: string,
	config?: AxiosRequestConfig,
): Promise<void> => {
	const fullURL = apiURL + url;
	try {
		await api.delete<T>(fullURL, {
			...config,
			withCredentials: true,
		});
	} catch (err) {
		throw new Error((err as any).response.data.name);
	}
};
