import {useQuery} from '@tanstack/react-query';
import {CihApiKeys} from './CihApiConstants';
import apiFetch from './axios';

export const useFetchMainPastor = () => {
  const {isLoading, data, isError, error, refetch} = useQuery({
    queryKey: [CihApiKeys.apiQueryKey.mainPastor],
    // get방식일 경우 async인자에 params 인자를 넣어면 안된다.
    queryFn: async () => {
      const response = await apiFetch.get(CihApiKeys.apiFetchUrl.mainPastor);
      return response.data.result;
    },
    keepPreviousData: true,
  });
  return {data, isLoading, isError, error, refetch};
};

export const useFetchMainCeleb = () => {
  const {isLoading, data, isError, error, refetch} = useQuery({
    queryKey: [CihApiKeys.apiQueryKey.mainCeleb],
    // get방식일 경우 async인자에 params 인자를 넣어면 안된다.
    queryFn: async () => {
      const response = await apiFetch.get(CihApiKeys.apiFetchUrl.mainCeleb);
      return response.data.result;
    },
    keepPreviousData: true,
  });
  console.log(CihApiKeys.apiFetchUrl.mainCeleb);
  return {data, isLoading, isError, error, refetch};
};
