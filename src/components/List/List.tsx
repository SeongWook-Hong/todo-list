import { useMemo } from 'react';
import Items from './Items';
import { useGetTodos } from '@/hooks/useMyTodos';
import Button from '@/components/common/Button';

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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos?.length;
    const doneCount = todos?.filter((todo: TTodo) => todo.isDone)?.length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  const handleCompleteButton = () => {};
  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold">오늘 할 일 ✏📚</div>

      {isSuccess && todos?.length === 0 ? (
        <h3>할 일을 모두 완료했어요 ☺</h3>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="flex items-center gap-4">
              <div>Total: {totalCount}</div>
              <div>Done: {doneCount}</div>
              <div>Not Done: {notDoneCount}</div>
            </div>
            <Button btn_type={'primary'} onClick={handleCompleteButton}>
              완료
            </Button>
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
      )}
    </div>
  );
};

export default List;
