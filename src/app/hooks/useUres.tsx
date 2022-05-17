import { createContext, FC, useContext, useState } from "react";
import { IRepo, IUser, IUserProvider } from "../types/types";
import userService from "../service/user.service";
import userRoposService from "../service/userRepos.service";

interface IUserContext {
  user: IUser | null;
  userRepos: IRepo[];
  error: unknown;
  isLoading: boolean;
  isReposLoading: boolean;
  loadUserData: (userName: string) => void;
  loadRepos: (page: number) => void;
}

const UserContex = createContext<IUserContext>({} as IUserContext);
export const useUser = () => useContext(UserContex);

const UserProvider: FC<IUserProvider> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [userRepos, setUserRepos] = useState<IRepo[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isReposLoading, setIsReposLoading] = useState(false);

  const loadUserData = (userName: string) => {
    setError("");
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const data = await userService.getUser(userName);
        const reposData = await userRoposService.getUserRepos(userName);
        setUser(data);
        setUserRepos(reposData);
      } catch (error: any) {
        setError(error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }, 1000);
  };

  const loadRepos = (page: number) => {
    setIsReposLoading(true);
    setTimeout(async () => {
      try {
        const reposData = await userRoposService.getUserRepos(
          user?.login || "",
          page
        );

        setUserRepos(reposData);
      } catch (error: any) {
        setError(error.response.data.message);
      } finally {
        setIsReposLoading(false);
      }
    }, 100);
  };

  return (
    <UserContex.Provider
      value={{
        user,
        userRepos,
        error,
        isLoading,
        loadUserData,
        loadRepos,
        isReposLoading,
      }}
    >
      {children}
    </UserContex.Provider>
  );
};

export default UserProvider;
