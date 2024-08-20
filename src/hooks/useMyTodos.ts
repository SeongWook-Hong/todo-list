import baseAxios from '@/lib/axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// todos 불러오기
export const useGetTodos = () =>
  useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const { data } = await baseAxios.get(`/todo/`);
      return data;
    },
  });

// todo 추가하기
export const usePostTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newContent: { content: string; deadline: string }) => {
      const { data } = await baseAxios.post(`/todo/`, {
        isDone: false,
        content: newContent.content,
        deadline: newContent.deadline,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

// todo 수정하기 (체크박스)
export const usePatchTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (targetId: number) => {
      const { data } = await baseAxios.patch(`/todo/${targetId}`, {
        isDone: true,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};

// todo 삭제하기
export const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (targetId: number) => {
      const { data } = await baseAxios.delete(`/todo/${targetId}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] });
    },
  });
};
