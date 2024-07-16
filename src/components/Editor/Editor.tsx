import React, { useRef, useState } from 'react';

interface Props {
  onAddTodo: (newContent: string) => void;
}

const Editor = ({ onAddTodo }: Props) => {
  const [content, setContent] = useState('');
  const contentRef = useRef<HTMLInputElement>(null);

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  const handleSubmit = () => {
    if (content === '') {
      contentRef.current?.focus();
      return;
    }
    onAddTodo(content);
    setContent('');
  };
  return (
    <div className="flex gap-3">
      <input
        ref={contentRef}
        value={content}
        className="flex-1 rounded-md border p-3 focus:border-primary"
        onKeyDown={handleKeyEnter}
        onChange={handleChangeContent}
        placeholder="할 일 추가하기..."
      />
      <button className="btn" type="button" onClick={handleSubmit}>
        추가
      </button>
    </div>
  );
};

export default Editor;
