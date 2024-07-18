import Editor from '@/components/Editor/Editor';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Head from 'next/head';
import { useReducer, useRef } from 'react';

interface TTodo {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
}
type TAction =
  | { type: 'ADD_TODO'; todo: TTodo }
  | { type: 'UPDATE_TODO' | 'DELETE_TODO'; targetId: number };

const reducer = (state: TTodo[], action: TAction): TTodo[] => {
  switch (action.type) {
    case 'ADD_TODO':
      return [action.todo, ...state];
    case 'UPDATE_TODO':
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item,
      );
    case 'DELETE_TODO':
      return state.filter((item) => item.id !== action.targetId);
    default:
      return state;
  }
};

export default function Home() {
  const [todos, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const handleAddTodo = (newContent: string) => {
    dispatch({
      type: 'ADD_TODO',
      todo: {
        id: idRef.current++,
        isDone: false,
        content: newContent,
        date: new Date().getTime(),
      },
    });
  };
  const handleUpdateTodo = (targetId: number) => {
    dispatch({ type: 'UPDATE_TODO', targetId: targetId });
  };
  const handleDeleteTodo = (targetId: number) => {
    dispatch({ type: 'DELETE_TODO', targetId: targetId });
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
        <List
          todos={todos}
          onUpdateTodo={handleUpdateTodo}
          onDeleteTodo={handleDeleteTodo}
        />
      </main>
    </>
  );
}
