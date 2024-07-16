interface Props {
  todo: { id: number; isDone: boolean; content: string; date: number };
}
const Items = ({ todo }: Props) => {
  return (
    <div className="flex items-center gap-5 border-b-[1px] pb-5">
      <input type="checkbox" />
      <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-bold">
        {todo.content}
      </div>
      <div className="text-gray-400">{todo.date}</div>
      <button className="btn p-2 text-sm">완료</button>
    </div>
  );
};

export default Items;
