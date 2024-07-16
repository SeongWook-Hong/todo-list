import Items from './Items';

const List = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="font-bold">오늘 할 일 ✏📚</div>
      <Items />
      <Items />
      <Items />
    </div>
  );
};

export default List;
