const Items = () => {
  return (
    <div className="flex items-center gap-5 border-b-[1px] pb-5">
      <input type="checkbox" />
      <div className="flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-bold">
        temp 할 일
      </div>
      <div className="text-gray-400">2024.03.03</div>
      <button className="btn p-2 text-sm">완료</button>
    </div>
  );
};

export default Items;
