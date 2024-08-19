import baseAxios from '@/lib/axios';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

// email 중복 체크
export const useGetOldUser = () => {
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

// 로그인
export const usePostLogin = () => {
  return useMutation({
    mutationFn: async (userInfo: { email: string; password: string }) => {
      const { data } = await baseAxios.post(
        '/user/login',
        {
          email: userInfo.email,
          password: userInfo.password,
        },
        {
          withCredentials: true,
        },
      );
      return data;
    },
    retry: false,
  });
};

// 토큰 인증
export const useGetAuth = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async () => {
      const { data } = await baseAxios.get('/user/auth', {
        withCredentials: true,
      });
      return data;
    },
    onSuccess: () => {
      router.push('/');
    },
    retry: false,
  });
};

// user 정보 추가하기
export const usePostUser = () => {
  return useMutation({
    mutationFn: async (userInfo: { email: string; password: string }) => {
      const { data } = await baseAxios.post('/user/', {
        email: userInfo.email,
        password: userInfo.password,
      });
      return data;
    },
  });
};

// user 정보 삭제하기
export const useDeleteUser = () => {
  return useMutation({
    mutationFn: async (targetId: number) => {
      const { data } = await baseAxios.delete(`/user/${targetId}`);
      return data;
    },
  });
};
