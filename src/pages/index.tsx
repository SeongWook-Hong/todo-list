import Editor from '@/components/Editor/Editor';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Head from 'next/head';
import { useDeleteTodo, usePatchTodo, usePostTodo } from '@/hooks/useMyTodos';
import LoginMenu from '@/components/LoginMenu/LoginMenu';
import { useCallback, useEffect } from 'react';
import { usePostLoginByToken } from '@/hooks/useUsers';

export default function Home() {
  const { mutate: postLoginByToken } = usePostLoginByToken();

  const { mutate: postTodo } = usePostTodo();
  const { mutate: patchTodo } = usePatchTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const handleAddTodo = useCallback(
    (newContent: { content: string; deadline: string }) => {
      postTodo(newContent);
    },
    [],
  );
  const handleUpdateTodo = useCallback(
    (updateContent: { targetId: number; emotionLv: number }) => {
      patchTodo(updateContent);
    },
    [],
  );
  const handleDeleteTodo = useCallback((targetId: number) => {
    deleteTodo(targetId);
  }, []);

  useEffect(() => {
    postLoginByToken();
  }, []);

  return (
    <>
      <Head>
        <title>TODO-LIST</title>
        <meta name="description" content="Todo-List App By Hong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ml-auto mr-auto flex w-[500px] flex-col gap-5 p-5">
        <LoginMenu />
        <Header />
        <Editor onAddTodo={handleAddTodo} />
        <List onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
      </main>
    </>
  );
}
