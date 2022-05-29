import { useEffect, useState } from 'react';
import { Method } from '../constants/types/index';
import request from '../helpers/api';

type FetchReturnType = [any | null, boolean, object | null];

type UseFetch = (
  url: string,
  method: Method,
  dataItems: any,
) => FetchReturnType;

const useFetch: UseFetch = (url, method, dataItems) => {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<object | null>(null);

  useEffect(function fetchData() {
    request(url, method, dataItems)
      .then((res: any) => setData(res))
      .catch((err: object) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [data, loading, error];
};

export default useFetch;
