import baseAxios from '@/lib/axios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

// todos 불러오기
export const useGetTodos = (userId?: string) =>
  useQuery({
    queryKey: ['todos', userId],
    queryFn: async () => {
      const { data } = await baseAxios.get(`/todo/${userId}`);
      return data;
    },
    enabled: !!userId,
    placeholderData: [],
  });

// todo 추가하기
export const usePostTodo = (userId?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (newContent: { content: string; deadline: string }) => {
      const { data } = await baseAxios.post(`/todo/${userId}`, {
        userId: userId,
        isDone: false,
        content: newContent.content,
        deadline: newContent.deadline,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos', userId] });
    },
  });
};

// todo 수정하기 (체크박스)
export const usePatchTodo = (userId?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (targetId: number) => {
      const { data } = await baseAxios.patch(`/todo/${userId}/${targetId}`, {
        isDone: true,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos', userId] });
    },
  });
};

// todo 삭제하기
export const useDeleteTodo = (userId?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (targetId: number) => {
      const { data } = await baseAxios.delete(`/todo/${userId}/${targetId}`);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos', userId] });
    },
  });
};
