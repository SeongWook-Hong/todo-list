import { useMemo } from 'react';
import Items from './Items';

interface Props {
  todos: { id: number; isDone: boolean; content: string; date: number }[];
  onUpdateTodo: (targetId: number) => void;
  onDeleteTodo: (targetId: number) => void;
}
const List = ({ todos, onUpdateTodo, onDeleteTodo }: Props) => {
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);

  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold">오늘 할 일 ✏📚</div>

      {todos.length === 0 ? (
        <h3>할 일을 모두 완료했어요 ☺</h3>
      ) : (
        <>
          <div className="flex gap-4">
            <div>Total: {totalCount}</div>
            <div>Done: {doneCount}</div>
            <div>Not Done: {notDoneCount}</div>
          </div>
          {todos.map((todo) => (
            <Items
              key={todo.id}
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
