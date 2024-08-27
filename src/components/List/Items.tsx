import { memo, useState } from 'react';
import Button from '@/components/common/Button';
import Image from 'next/image';
import UpdateModal from '../common/Modal/UpdateModal';
import { YYYYMMDD } from '@/lib/dateForm';

interface TTodo {
  _id: number;
  emotionLv?: number;
  isDone: boolean;
  content: string;
  deadline: string;
}
interface Props {
  todo: TTodo;
  onUpdateTodo: (updateContent: {
    targetId: number;
    emotionLv: number;
  }) => void;
  onDeleteTodo: (targetId: number) => void;
}
const Items = ({ todo, onUpdateTodo, onDeleteTodo }: Props) => {
  const today = YYYYMMDD(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  const handleChangeCheckBox = () => {
    setModalOpen(true);
  };
  const handleDeleteButton = () => {
    onDeleteTodo(todo._id);
  };
  const handleModalClose = () => {
    setModalOpen(false);
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
      {todo.emotionLv !== undefined && (
        <Image
          src={`/images/emotion${todo.emotionLv}.png`}
          alt="emotion image"
          width={40}
          height={40}
        />
      )}
      <div
        className={today === todo.deadline ? 'text-red-500' : 'text-gray-400'}
      >
        {todo.deadline}
      </div>
      <Button
        btn_type={'delete'}
        extraStyle={'text-sm'}
        onClick={handleDeleteButton}
      >
        ✕
      </Button>
      {modalOpen && (
        <UpdateModal
          targetId={todo._id}
          onUpdateTodo={onUpdateTodo}
          onModalClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default memo(Items);
