import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import apiFetch from './axios';
import {CihApiKeys} from './CihApiConstants';

export const useFetchYoutubePastor = (p, crud = 'r') => {
  const {isLoading, data, isError, error, refetch} = useQuery({
    queryKey: [CihApiKeys.apiQueryKey.pastor, p, crud],
    // get방식일 경우 async인자에 params 인자를 넣어면 안된다.
    queryFn: async () => {
      const response = await apiFetch.get(CihApiKeys.apiFetchUrl.pastor, {
        params: {
          options: p.options,
          keyword: p.keyword,
          shorts: p.shorts,
          page: p.page,
        },
      });
      return response.data.result;
    },
    keepPreviousData: true,
    enabled: !!p,
  });
  return {data, isLoading, isError, error, refetch};
};

export const useSaveYoutubePastor = () => {
  const QueryClient = useQueryClient();
  const {mutate: mutateSaveYoutubePastor, isLoading: isLoadingYoutubePastor} =
    useMutation({
      mutationFn: async params => {
        const response = await apiFetch.post(
          CihApiKeys.apiFetchUrl.pastor,
          params,
        );
        return response.data.result;
      },
      onSuccess: () => {
        QueryClient.invalidateQueries({
          queryKey: [CihApiKeys.apiQueryKey.pastor],
        });
      },
      onError: err => {
        console.log(err.message);
      },
    });
  return {mutateSaveYoutubePastor, isLoadingYoutubePastor};
};

export const useDeleteYoutubePastor = () => {
  const QueryClient = useQueryClient();
  const {
    mutate: mutateDeleteYoutubePastor,
    isLoading: isLoadingDeleteYoutubePastor,
  } = useMutation({
    mutationFn: async params => {
      const response = await apiFetch.post('/app/faith-delete', params);
      return response.data.result;
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: [CihApiKeys.apiQueryKey.pastor],
      });
    },
    onError: err => {
      console.log(err);
    },
  });
  return {mutateDeleteYoutubePastor, isLoadingDeleteYoutubePastor};
};
