import { memo } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import { useLoginStore } from '@/store/useAuthStore';
import Image from 'next/image';

const LoginMenu = () => {
  const { isLogin, loginName, setIsLogin } = useLoginStore();
  const router = useRouter();

  return (
    <header className="mb-4 flex items-center">
      <Image
        src="/images/logo.png"
        alt="todo-list logo"
        className="mr-auto"
        width={120}
        height={40}
      />
      {isLogin ? (
        <div>
          {loginName}님
          <Button
            btn_type="delete"
            onClick={() => {
              setIsLogin();
            }}
          >
            ✕
          </Button>
        </div>
      ) : (
        <>
          <Button
            btn_type="primary"
            onClick={() => {
              router.push('/auth/signup');
            }}
            extraStyle="mr-2"
          >
            가입
          </Button>
          <Button
            btn_type="primary"
            onClick={() => {
              router.push('/auth/signin');
            }}
          >
            로그인
          </Button>
        </>
      )}
    </header>
  );
};

export default memo(LoginMenu);
