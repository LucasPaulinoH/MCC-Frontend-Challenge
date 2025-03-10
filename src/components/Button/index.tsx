import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
  onClick?: VoidFunction
}

const Button = (props: ButtonProps) => {
  const { label, icon, onClick } = props;

  return (
    <button
      type="submit"
      className="cursor-pointer w-full text-button-color bg-button-color font-semibold flex items-center justify-center gap-3 border rounded-md duration-100 p-2"
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
