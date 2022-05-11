import { FC } from "react";
import search from "../../assets/search.svg";
import style from "./style.module.scss";

const StartPage: FC = () => {
  return (
    <div className={style.start}>
      <img src={search} alt="search" />
      <span>
        Start with searching <br /> a GitHub user
      </span>
    </div>
  );
};

export default StartPage;
