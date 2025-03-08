import { ReactNode } from "react";

interface ButtonProps {
  label: string;
  icon?: ReactNode;
}

const Button = (props: ButtonProps) => {
  const { label, icon } = props;

  return (
    <button
      type="submit"
      className="cursor-pointer w-full font-semibold flex items-center justify-center gap-3 border rounded-md duration-100 p-2"
    >
      {icon}
      {label}
    </button>
  );
};

export default Button;
