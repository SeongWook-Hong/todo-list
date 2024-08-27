import { useRef, useState } from 'react';
import Button from '@/components/common/Button';
import ModalPortal from './ModalPortal';
import EmotionList from '@/components/EmotionList/EmotionList';

const emotionList = [
  { emotionId: 1, emotionState: '나쁨' },
  { emotionId: 2, emotionState: '보통' },
  { emotionId: 3, emotionState: '좋음' },
];

interface Props {
  targetId: number;
  onUpdateTodo: (updateContent: {
    targetId: number;
    emotionLv: number;
  }) => void;
  onModalClose: () => void;
}
const UpdateModal = ({ targetId, onUpdateTodo, onModalClose }: Props) => {
  const modalBackground = useRef<HTMLDivElement>(null);
  const [emotionLv, setEmotionLv] = useState<number>(3);

  const handleConfirmClick = () => {
    onUpdateTodo({ targetId, emotionLv });
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
        <div className="flex h-[25%] w-[25%] flex-col items-center justify-between rounded-md bg-white p-[20px]">
          <h2>이 일을 마친 감정은 어떠신가요?</h2>
          <div className="flex gap-4">
            {emotionList.map((item) => (
              <EmotionList
                key={item.emotionId}
                {...item}
                isSelected={emotionLv === item.emotionId}
                onClick={() => {
                  setEmotionLv(item.emotionId);
                }}
              />
            ))}
          </div>
          <Button btn_type={'primary'} onClick={handleConfirmClick}>
            확인
          </Button>
        </div>
      </div>
    </ModalPortal>
  );
};
export default UpdateModal;
