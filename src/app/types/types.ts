import { ReactNode } from "react";

export interface IUserProvider {
  children: ReactNode;
}

export interface IUser {
  login: string;
  id: number | null;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  name: string;
  public_repos: number | null;
  public_gists: number | null;
  followers: number | null;
  following: number | null;
}

export interface IRepo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}
