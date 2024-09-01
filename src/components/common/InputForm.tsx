import { ReactNode } from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  extraStyle?: string;
  htmlFor: string;
  type?: string;
  children: ReactNode;
}
function InputForm({ extraStyle, htmlFor, type, children, ...rest }: Props) {
  return (
    <div className="mb-5">
      <label className="w-[100%]" htmlFor={htmlFor}>
        {children}
      </label>
      <input
        className={`w-[100%] rounded-lg border border-[#D9D9D9] px-4 py-3 text-black placeholder:text-[#8C8C8C] focus:border-primary ${extraStyle ? extraStyle : ''}`}
        id={htmlFor}
        name={htmlFor}
        type={type ? type : htmlFor}
        placeholder={type ? type : htmlFor}
        {...rest}
        required
      />
    </div>
  );
}

export default InputForm;
