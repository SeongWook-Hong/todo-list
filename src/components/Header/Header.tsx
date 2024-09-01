import { koreanDateString } from '@/lib/dateForm';

const Header = () => {
  return (
    <div className="flex flex-col gap-3">
      <h3>오늘은 📅</h3>
      <h1 className="text-primary">{koreanDateString(new Date())} 🌻</h1>
    </div>
  );
};

export default Header;
