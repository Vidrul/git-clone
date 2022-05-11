import { FC, FormEvent, memo } from "react";
import style from "./style.module.scss";

interface InputProps {
  placeholder: string;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
  value: string;
}

const Input: FC<InputProps> = ({ placeholder, onChange, value }) => {
  return (
    <input
      className={style.input}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default memo(Input);
