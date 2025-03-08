import { Dispatch, Ref, SetStateAction } from "react";

interface TextInputProps {
  label: string;
  type: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

const TextInput = (props: TextInputProps) => {
  const { label, type, placeholder, ref, value, setValue } = props;

  return (
    <div className="flex flex-col gap-1 w-[400px]">
      <label className="font-semibold">{label}</label>
      <input
        type={type}
        autoComplete="off"
        ref={ref}
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        className="h-[30px] p-[.5rem] rounded-[.4rem] border-1 border-[rgba(0,0,0,.5)]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextInput;
