import Image from 'next/image';

interface Props {
  emotionId: number;
  emotionState: string;
  isSelected: boolean;
  onClick: () => void;
}
const EmotionList = ({
  emotionId,
  emotionState,
  isSelected,
  onClick,
}: Props) => {
  return (
    <div
      className={`rounded-md p-2 text-center ${isSelected ? 'bg-black/10' : ''}`}
      onClick={onClick}
    >
      <Image
        src={`/images/emotion${emotionId}.png`}
        alt=""
        width={55}
        height={55}
      />
      {emotionState}
    </div>
  );
};
export default EmotionList;
