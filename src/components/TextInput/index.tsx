import { Dispatch, InputHTMLAttributes, SetStateAction } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;

  value?: string;
  setValue?: Dispatch<SetStateAction<string>>;
}

export const DEFAULT_INPUT_STYLES =
  "h-[30px] p-[.5rem] rounded-[.4rem] border-1 border-[rgba(0,0,0,.5)]";

const TextInput = (props: TextInputProps) => {
  const { label, value, setValue, ...others } = props;

  return (
    <div className="flex flex-col gap-1 w-[400px]">
      <label className="font-semibold">{label}</label>
      <input
        autoComplete="off"
        value={value}
        onChange={(e) => setValue && setValue(e.target.value)}
        {...others}
      />
    </div>
  );
};

export default TextInput;
