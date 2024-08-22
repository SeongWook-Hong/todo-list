import { memo } from 'react';
import { useRouter } from 'next/router';
import Button from '@/components/common/Button';
import { useLoginStore } from '@/store/useAuthStore';

const LoginMenu = () => {
  const { isLogin, setIsLogin } = useLoginStore();
  const router = useRouter();

  return (
    <header className="mb-4">
      {!isLogin ? (
        <div className="flex items-center justify-end gap-2">
          <Button
            btn_type="primary"
            onClick={() => {
              router.push('/auth/signup');
            }}
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
        </div>
      ) : (
        <div className="flex items-center justify-between">
          OOO님, 오늘 하루도 화이팅!
          <Button
            btn_type="delete"
            onClick={() => {
              setIsLogin();
            }}
          >
            logout
          </Button>
        </div>
      )}
    </header>
  );
};

export default memo(LoginMenu);
