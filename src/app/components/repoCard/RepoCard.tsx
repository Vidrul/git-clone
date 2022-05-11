import { FC } from "react";
import style from "./style.module.scss";

interface CardProps {
  name: string;
  description: string;
  html_url: string;
}

const RepoCard: FC<CardProps> = ({ name, description, html_url }) => {
  return (
    <div className={style.card}>
      <a className={style.card__link} href={html_url}>
        {name}
      </a>
      <span className={style.card__description}>{description}</span>
    </div>
  );
};

export default RepoCard;
