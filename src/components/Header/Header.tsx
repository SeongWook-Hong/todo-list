import { memo } from 'react';

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3>Today is 🗓</h3>
      <h1 className="text-primary">{new Date().toDateString()}</h1>
    </div>
  );
};

export default memo(Header);
