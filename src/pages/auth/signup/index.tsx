import Button from '@/components/common/Button';
import InputForm from '@/components/common/InputForm';
import { useGetUser, usePostUser } from '@/pages/api/hooks/useUsers';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Signup = () => {
  const router = useRouter();

  const [values, setValues] = useState({
    email: '',
    password: '',
    retype: '',
  });

  const { mutate: postUser } = usePostUser();
  const { mutate: getUser } = useGetUser();

  const handleAddUser = (userInfo: { email: string; password: string }) => {
    postUser(userInfo);
  };
  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const retype = formData.get('retype') as string;

    if (password !== retype) {
      alert('패스워드가 일치하지 않습니다.');
      return;
    }
    getUser(email, {
      onSuccess: () => {
        alert('이미 사용 중인 이메일 입니다.');
        return;
      },
    });

    handleAddUser({ email, password });
    router.push('/auth/signin');
  }

  return (
    <>
      <h1 className="mx-auto my-5">회원가입</h1>
      <form onSubmit={handleSubmitForm}>
        <InputForm
          htmlFor="email"
          value={values.email}
          onChange={handleChangeInput}
        >
          이메일
        </InputForm>
        <InputForm
          htmlFor="password"
          value={values.password}
          onChange={handleChangeInput}
        >
          비밀번호
        </InputForm>
        <InputForm
          htmlFor="retype"
          type={'password'}
          value={values.retype}
          onChange={handleChangeInput}
        >
          비밀번호 확인
        </InputForm>
        <Button btn_type="primary" extraStyle="w-[100%] mt-2">
          회원가입
        </Button>
      </form>
      <Button
        btn_type="delete"
        extraStyle="w-[50%] ml-auto"
        onClick={() => {
          router.push('/auth/signin');
        }}
      >
        이미 계정이 있으신가요?
      </Button>
    </>
  );
};

export default Signup;
