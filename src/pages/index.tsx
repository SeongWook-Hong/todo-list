import Editor from '@/components/Editor/Editor';
import Header from '@/components/Header/Header';
import List from '@/components/List/List';
import Head from 'next/head';

export default function Home() {
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
        <Editor />
        <List />
      </main>
    </>
  );
}
