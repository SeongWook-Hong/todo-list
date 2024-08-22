import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="ml-auto mr-auto w-[500px] p-5">
      <main className="flex flex-col gap-5">{children}</main>
    </div>
  );
};

export default Layout;
