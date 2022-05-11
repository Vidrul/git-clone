import { FC } from "react";
import style from "./style.module.scss";
import union from "../../assets/union.svg";

const ErrorPage: FC = () => {
  return (
    <div className={style.error}>
      <img src={union} alt="" />
      <span>User not found</span>
    </div>
  );
};

export default ErrorPage;
