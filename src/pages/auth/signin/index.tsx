import Button from '@/components/common/Button';
import InputForm from '@/components/common/InputForm';
import { usePostUser } from '@/pages/api/hooks/useUsers';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Signin = () => {
  const router = useRouter();

  const { mutate: postUser } = usePostUser();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });
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
    handleAddUser({ email, password });

    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <>
      <h1 className="mx-auto my-5">로그인</h1>
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

        <Button btn_type="primary" extraStyle="w-[100%] mt-2">
          로그인
        </Button>
      </form>
      <Button
        btn_type="delete"
        extraStyle="w-[50%] ml-auto"
        onClick={() => {
          router.push('/auth/signup');
        }}
      >
        아직 계정이 없으신가요?
      </Button>
    </>
  );
};

export default Signin;
