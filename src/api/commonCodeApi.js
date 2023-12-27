import {useQuery} from '@tanstack/react-query';
import apiFetch from './axios';

export const useFetchPastor = () => {
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['common-code/pastor'],
    queryFn: async () => {
      const response = await apiFetch.get('/common-code/pastor');
      return response.data.result;
    },
    keepPreviousData: true,
  });
  return {data, isLoading, isError, error};
};
