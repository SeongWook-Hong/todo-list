import { ReactNode } from 'react';

interface Props {
  btn_type: 'primary' | 'delete';
  extraStyle?: string;
  disabled?: boolean;
  onClick: () => void;
  children: ReactNode;
}

const Button = ({
  btn_type,
  extraStyle,
  disabled,
  onClick,
  children,
}: Props) => {
  return (
    <button
      className={`btn_${btn_type} whitespace-nowrap ${extraStyle ? extraStyle : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
