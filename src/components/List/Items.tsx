import { memo } from 'react';

interface TTodo {
  _id: number;
  isDone: boolean;
  content: string;
  deadline: number;
}
interface Props {
  todo: TTodo;
  onUpdateTodo: (targetId: number) => void;
  onDeleteTodo: (targetId: number) => void;
}
const Items = ({ todo, onUpdateTodo, onDeleteTodo }: Props) => {
  const handleChangeCheckBox = () => {
    onUpdateTodo(todo._id);
  };
  const handleDeleteButton = () => {
    onDeleteTodo(todo._id);
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
        {new Date(todo.deadline).toLocaleDateString()}
      </div>
      <button className="btn p-2 text-sm" onClick={handleDeleteButton}>
        지우기
      </button>
    </div>
  );
};

export default memo(Items);
