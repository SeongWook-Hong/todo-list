import Editor from '@/components/Editor/Editor';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Head from 'next/head';
import { useDeleteTodo, usePatchTodo, usePostTodo } from '@/hooks/useMyTodos';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const { userId } = router.query;
  const id = userId?.toString();

  const { mutate: postTodo } = usePostTodo(id);
  const { mutate: patchTodo } = usePatchTodo(id);
  const { mutate: deleteTodo } = useDeleteTodo(id);

  const handleAddTodo = (newContent: { content: string; deadline: string }) => {
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
      <Header />
      <Editor onAddTodo={handleAddTodo} />
      <List onUpdateTodo={handleUpdateTodo} onDeleteTodo={handleDeleteTodo} />
    </>
  );
}
