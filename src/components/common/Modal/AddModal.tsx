import { useRef, useState } from 'react';
import Button from '@/components/common/Button';
import { YYYYMMDD } from '@/lib/dateForm';
import ModalPortal from './ModalPortal';

interface Props {
  content: string;
  onAddTodo: (newContent: { content: string; deadline: string }) => void;
  onModalClose: () => void;
}
const AddModal = ({ content, onAddTodo, onModalClose }: Props) => {
  const modalBackground = useRef<HTMLDivElement>(null);
  const today = YYYYMMDD(new Date());

  const [deadline, setDeadline] = useState(today);

  const handleChangeDeadline = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDeadline(e.target.value);
  };

  const handleConfirmClick = () => {
    onAddTodo({ content, deadline });
    onModalClose();
  };
  return (
    <ModalPortal>
      <div
        className="fixed left-0 top-0 flex h-[100%] w-[100%] items-center justify-center bg-black/50"
        ref={modalBackground}
        onClick={(e) => {
          if (e.target === modalBackground.current) {
            onModalClose();
          }
        }}
      >
        <div className="flex h-[25%] w-[25%] flex-col items-center justify-between rounded-md bg-white p-[30px]">
          <h2>마감일 설정하기</h2>
          <input
            type="date"
            min={today}
            defaultValue={today}
            onChange={handleChangeDeadline}
            className="h-[40px] w-[160px] rounded-md bg-black/5 p-3"
          />
          <div className="flex gap-2">
            <Button btn_type={'primary'} onClick={handleConfirmClick}>
              확인
            </Button>
            <Button
              btn_type={'delete'}
              extraStyle={'bg-black/10'}
              onClick={onModalClose}
            >
              취소
            </Button>
          </div>
        </div>
      </div>
    </ModalPortal>
  );
};
export default AddModal;
