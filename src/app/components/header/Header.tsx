import { FC, FormEvent, useState } from "react";
import style from "./style.module.scss";
import gitLogo from "../../assets/gitLogo.svg";
import search from "../../assets/search.svg";
import Input from "../input/Input";
import { useUser } from "../../hooks/useUres";

const Header: FC = () => {
  const { loadUserData } = useUser();
  const [inputData, setInputData] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    loadUserData(inputData);
  };

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setInputData(e.currentTarget.value);
  };

  return (
    <header className={style.header}>
      <img src={gitLogo} alt="gitLogo" />
      <form className={style.header__form} onSubmit={onSubmit}>
        <img className={style.header__form_img} src={search} alt="" />
        <Input
          placeholder={"Enter GitHub username"}
          onChange={handleChange}
          value={inputData}
        />
      </form>
    </header>
  );
};

export default Header;
