import Items from './Items';

interface Props {
  todos: { id: number; isDone: boolean; content: string; date: number }[];
  onUpdateTodo: (targetId: number) => void;
}
const List = ({ todos, onUpdateTodo }: Props) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold">오늘 할 일 ✏📚</div>
      {todos.length === 0 ? (
        <h3>할 일을 모두 완료했어요 ☺</h3>
      ) : (
        todos.map((todo) => (
          <Items key={todo.id} todo={todo} onUpdateTodo={onUpdateTodo} />
        ))
      )}
    </div>
  );
};

export default List;
