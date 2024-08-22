import React, { memo, useRef, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal/Modal';
import ModalPortal from '@/components/common/Modal/ModalPortal';

interface Props {
  onAddTodo: (newContent: { content: string; deadline: string }) => void;
}

const Editor = ({ onAddTodo }: Props) => {
  const token = Cookies.get('loginToken');
  const router = useRouter();

  const [content, setContent] = useState('');
  const contentRef = useRef<HTMLInputElement>(null);

  const handleChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };
  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      return;
    }
  };
  const handleDeadlineClick = () => {
    if (content === '') {
      contentRef.current?.focus();
      return;
    }
    if (!token) {
      alert('로그인 후에 서비스를 이용할 수 있습니다.');
      router.push('/auth/signin');
      return;
    }
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setContent('');
    setModalOpen(false);
  };
  const [modalOpen, setModalOpen] = useState(false);

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
      <Button btn_type={'primary'} onClick={handleDeadlineClick}>
        마감일
      </Button>
      {modalOpen && (
        <ModalPortal>
          <Modal
            content={content}
            onAddTodo={onAddTodo}
            onModalClose={handleModalClose}
          />
        </ModalPortal>
      )}
    </div>
  );
};

export default memo(Editor);
