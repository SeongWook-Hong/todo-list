import { memo } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import { useLoginStore } from '@/store/useAuthStore';
import Image from 'next/image';
import logo from '@/assets/images/logo.png';

const LoginMenu = () => {
  const { isLogin, setIsLogin } = useLoginStore();
  const router = useRouter();

  return (
    <header className="mb-4 flex items-center">
      <Image
        src={logo}
        width={120}
        height={40}
        alt="todo-list logo"
        className="mr-auto"
      />
      {isLogin === undefined ? (
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
      ) : (
        <div>
          {isLogin}님
          <Button
            btn_type="delete"
            onClick={() => {
              setIsLogin();
            }}
          >
            ✕
          </Button>
        </div>
      )}
    </header>
  );
};

export default memo(LoginMenu);
