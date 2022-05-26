import { API_URL } from './../constants/index';
import axios from 'axios';
import config from '../config.json';

const api = axios.create({ baseURL: config.api });

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

type Request = (url: string, method: Method, data: any) => Promise<unknown>;

const request: Request = (url, method, data) => {
	switch (method) {
		case 'GET':
			return new Promise((resolve, reject) => {
				axios
					.get(API_URL + url)
					.then((res) => resolve(res.data))
					.catch((err) => reject(err));
			});
		default:
			return Promise.reject(new Error());
	}
};
export default request;
