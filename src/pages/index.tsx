import Editor from '@/components/Editor/Editor';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Head from 'next/head';
import { useRef, useState } from 'react';

interface TTodo {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
}
export default function Home() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const idRef = useRef(0);

  const handleAddTodo = (newContent: string) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: newContent,
      date: new Date().getTime(),
    };
    setTodos([...todos, newTodo]);
  };
  const handleUpdateTodo = (targetId: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === targetId ? { ...todo, isDone: !todo.isDone } : todo,
      ),
    );
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
        <List todos={todos} onUpdateTodo={handleUpdateTodo} />
      </main>
    </>
  );
}
