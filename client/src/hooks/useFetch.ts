import { useEffect, useState } from 'react';
import request from '../helpers/api';

type Method = 'GET' | 'POST' | 'PATCH' | 'DELETE';

type fetchReturnType = [any | null, boolean, object | null];

type UseFetch = (url: string, method: Method, data: any) => fetchReturnType;

const useFetch: UseFetch = (url, method, dataItems) => {
	const [data, setData] = useState<any | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<object | null>(null);

	useEffect(function fetchData() {
		(async () =>
			await request(url, method, dataItems)
				.then((data: any) => setData(data))
				.catch((err: object) => setError(err))
				.finally(() => setLoading(false)))();
	}, []);

	return [data, loading, error];
};

export default useFetch;
