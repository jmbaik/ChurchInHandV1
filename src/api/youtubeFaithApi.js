import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import apiFetch from './axios';
import {CihApiKeys} from './CihApiConstants';

export const useFetchYoutubeFaith = (p, crud = 'r') => {
  const {isLoading, data, isError, error, refetch} = useQuery({
    queryKey: ['youtube/faith', p, crud],
    // get방식일 경우 async인자에 params 인자를 넣어면 안된다.
    queryFn: async () => {
      const response = await apiFetch.get(CihApiKeys.apiFetchUrl.faith, {
        params: {
          options: p.options,
          keyword: p.keyword,
          shorts: p.shorts,
        },
      });
      return response.data.result;
    },
    keepPreviousData: true,
    enabled: !!p,
  });
  return {data, isLoading, isError, error, refetch};
};

export const useSaveYoutubeFaith = () => {
  const QueryClient = useQueryClient();
  const {mutate: mutateSaveYoutubeFaith, isLoading: isLoadingYoutubeFaith} =
    useMutation({
      mutationFn: async params => {
        const response = await apiFetch.post(
          CihApiKeys.apiFetchUrl.faith,
          params,
        );
        return response.data.result;
      },
      onSuccess: () => {
        QueryClient.invalidateQueries({
          queryKey: [CihApiKeys.apiQueryKey.faith],
        });
      },
      onError: err => {
        console.log(err.message);
      },
    });
  return {mutateSaveYoutubeFaith, isLoadingYoutubeFaith};
};

export const useDeleteYoutubeFaith = () => {
  const QueryClient = useQueryClient();
  const {
    mutate: mutateDeleteYoutubeFaith,
    isLoading: isLoadingDeleteYoutubeFaith,
  } = useMutation({
    mutationFn: async params => {
      const response = await apiFetch.post('/youtube/faith-delete', params);
      return response.data.result;
    },
    onSuccess: () => {
      QueryClient.invalidateQueries({
        queryKey: [CihApiKeys.apiQueryKey.faith],
      });
    },
    onError: err => {
      console.log(err);
    },
  });
  return {mutateDeleteYoutubeFaith, isLoadingDeleteYoutubeFaith};
};
