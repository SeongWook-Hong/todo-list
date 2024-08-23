import baseAxios from '@/lib/axios';
import { useLoginStore } from '@/store/useAuthStore';
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

// 로그인 및 토큰 인증
export const usePostLogin = () => {
  const { setIsLogin } = useLoginStore();
  const router = useRouter();

  return useMutation({
    mutationFn: async (userInfo: { email: string; password: string }) => {
      const { data: loginData } = await baseAxios.post(
        '/user/login',
        {
          email: userInfo.email,
          password: userInfo.password,
        },
        {
          withCredentials: true,
        },
      );
      await baseAxios.get('/user/auth', {
        withCredentials: true,
      });
      return loginData;
    },
    onSuccess: () => {
      setIsLogin();
      router.push('/');
    },
    onError: () => {
      alert('이메일과 비밀번호를 다시 확인해주세요.');
    },
    retry: false,
  });
};

// user 정보 추가하기
export const usePostUser = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (userInfo: {
      email: string;
      nickname: string;
      password: string;
    }) => {
      const { data } = await baseAxios.post('/user/', {
        email: userInfo.email,
        nickname: userInfo.nickname,
        password: userInfo.password,
      });
      return data;
    },
    onSuccess: () => {
      router.push('/auth/signin');
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
