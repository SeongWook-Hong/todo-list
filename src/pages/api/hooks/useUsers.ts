import baseAxios from '@/lib/axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';

// user 정보 불러오기
export const useGetUser = () => {
  return useMutation({
    mutationFn: async (email: string) => {
      const { data } = await baseAxios.get('/user/', {
        params: { email },
      });
      return data;
    },
    retry: false,
  });
};

// user 정보 추가하기
export const usePostUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userInfo: { email: string; password: string }) => {
      const { data } = await baseAxios.post('/user/', {
        email: userInfo.email,
        password: userInfo.password,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

// user 정보 삭제하기
export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (targetId: number) => {
      const { data } = await baseAxios.delete(`/user/${targetId}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};
