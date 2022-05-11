import { FC } from "react";
import { Loader } from "../components/loader/Loader";
import { useUser } from "../hooks/useUres";
import UserPage from "../pages/userPage/UserPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import StartPage from "../pages/startPage/StartPage";
import style from "./style.module.scss";

const Layout: FC = () => {
  const { isLoading, error, user } = useUser();

  return (
    <div className={style.container}>
      <>
        {isLoading ? (
          <div className={style.loader__wrapper}>
            <Loader />
          </div>
        ) : error ? (
          <ErrorPage />
        ) : user === undefined ? (
          <StartPage />
        ) : (
          <UserPage />
        )}
      </>
    </div>
  );
};

export default Layout;
