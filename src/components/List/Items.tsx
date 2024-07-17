interface Props {
  todo: { id: number; isDone: boolean; content: string; date: number };
  onUpdateTodo: (targetId: number) => void;
}
const Items = ({ todo, onUpdateTodo }: Props) => {
  const handleChangeCheckBox = () => {
    onUpdateTodo(todo.id);
  };
  return (
    <div className="flex items-center gap-5 border-b-[1px] pb-5">
      <input
        readOnly
        type="checkbox"
        checked={todo.isDone}
        onChange={handleChangeCheckBox}
      />
      <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-bold">
        {todo.content}
      </div>
      <div className="text-gray-400">
        {new Date(todo.date).toLocaleDateString()}
      </div>
      <button className="btn p-2 text-sm">완료</button>
    </div>
  );
};

export default Items;
