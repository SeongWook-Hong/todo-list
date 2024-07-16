const Editor = () => {
  return (
    <div className="flex gap-3">
      <input
        className="focus:border-primary flex-1 rounded-md border p-3"
        placeholder="할 일 추가하기..."
      />
      <button className="btn" type="button">
        추가
      </button>
    </div>
  );
};

export default Editor;
