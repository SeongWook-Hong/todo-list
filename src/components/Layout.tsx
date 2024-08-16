import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div>
      <header>Header</header>
      <main className="ml-auto mr-auto flex w-[500px] flex-col gap-5 p-5">
        {children}
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
