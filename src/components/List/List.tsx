import { useMemo } from 'react';
import Items from './Items';
import { useGetTodos } from '@/hooks/useMyTodos';
import { useLoginStore } from '@/store/useAuthStore';

interface TTodo {
  _id: number;
  isDone: boolean;
  content: string;
  deadline: string;
}
interface Props {
  onUpdateTodo: (targetId: number) => void;
  onDeleteTodo: (targetId: number) => void;
}
const List = ({ onUpdateTodo, onDeleteTodo }: Props) => {
  const { data: todos, isSuccess } = useGetTodos();
  const { isLogin } = useLoginStore();

  const { notDoneCount } = useMemo(() => {
    const totalCount = todos?.length;
    const doneCount = todos?.filter((todo: TTodo) => todo.isDone)?.length;
    const notDoneCount = totalCount - doneCount;

    return { notDoneCount };
  }, [todos]);

  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold">오늘 할 일 ✏📚</div>
      {isLogin ? (
        isSuccess && todos?.length === 0 ? (
          <h3>할 일을 모두 완료했어요 ☺</h3>
        ) : (
          <>
            <div className="flex justify-between">
              <div className="ml-auto mr-3">미완료: {notDoneCount}</div>
            </div>
            {todos?.map((todo: TTodo) => (
              <Items
                key={todo._id}
                todo={todo}
                onUpdateTodo={onUpdateTodo}
                onDeleteTodo={onDeleteTodo}
              />
            ))}
          </>
        )
      ) : (
        <>로그인 후에 이용 가능합니다.</>
      )}
    </div>
  );
};

export default List;
