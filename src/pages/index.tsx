import Editor from '@/components/Editor/Editor';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Head from 'next/head';
import {
  useDeleteTodo,
  usePatchTodo,
  usePostTodo,
} from '@/pages/api/hooks/useMyTodos';

export default function Home() {
  const { mutate: postTodo } = usePostTodo();
  const { mutate: patchTodo } = usePatchTodo();
  const { mutate: deleteTodo } = useDeleteTodo();

  const handleAddTodo = (newContent: string) => {
    postTodo(newContent);
  };
  const handleUpdateTodo = (targetId: number) => {
    patchTodo(targetId);
  };
  const handleDeleteTodo = (targetId: number) => {
    deleteTodo(targetId);
  };

  return (
    <>
      <Head>
        <title>TODO-LIST</title>
        <meta name="description" content="Todo-List App By Hong" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="ml-auto mr-auto flex w-[500px] flex-col gap-5 p-5">
        <Header />
        <Editor onAddTodo={handleAddTodo} />
        <List onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
      </main>
    </>
  );
}
