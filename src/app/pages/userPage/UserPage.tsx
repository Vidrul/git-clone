import { FC, useState } from "react";
import { useUser } from "../../hooks/useUres";
import style from "./style.module.scss";
import followers from "../../assets/followers.svg";
import following from "../../assets/following.svg";
import { displayCurrentReposNum, numberFormatter } from "../../utils/helpers";
import RepoCard from "../../components/repoCard/RepoCard";
import Paginate from "../../components/pagination/Paginate";
import x from "../../assets/x.svg";

const UserPage: FC = () => {
  const { user, userRepos, loadRepos, isReposLoading } = useUser();
  const countPerPage = 4;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil((user?.public_repos || 0) / countPerPage);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    loadRepos(value);
  };

  const counter = displayCurrentReposNum(
    countPerPage,
    page,
    user?.public_repos || 0,
    userRepos?.length || 0
  );

  return (
    <div className={style.container}>
      <div className={style.description}>
        <img
          className={style.description__image}
          src={user?.avatar_url}
          alt=""
        />
        <span className={style.description__name}>{user?.name}</span>
        <a href={user?.html_url} className={style.description__link}>
          {user?.login}
        </a>
        <div className={style.description__following}>
          <span className={style.followers}>
            {user?.followers === 0 ? null : <img src={followers} alt="" />}
            {user?.followers === 0
              ? ""
              : `${numberFormatter(user?.followers || 0)} followers`}
          </span>
          <span className={style.following}>
            {user?.following === 0 ? null : <img src={following} alt="" />}
            {user?.following === 0
              ? ""
              : `${numberFormatter(user?.following || 0)} following`}
          </span>
        </div>
      </div>

      {userRepos?.length === 0 ? (
        <div className={style.noRepos}>
          <img src={x} alt="search" />
          <span>Repository list is empty</span>
        </div>
      ) : (
        <div className={style.reposContainer}>
          <h1
            className={style.reposContainer__title}
          >{`Repositories (${user?.public_repos})`}</h1>

          <div className={style.reposContainer__list}>
            {userRepos?.map((rep) => (
              <RepoCard
                key={rep.id}
                name={rep.name}
                description={rep.description}
                html_url={rep.html_url}
              />
            ))}
          </div>
          <div className={style.counter}>
            {isReposLoading ? (
              <span className={style.counter__text}>{"..."}</span>
            ) : (
              <span className={style.counter__text}>{counter}</span>
            )}
            <Paginate
              count={pageCount}
              onChange={handleChange}
              cuurentPage={page}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
