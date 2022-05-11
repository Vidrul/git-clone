import { IRepo } from "../types/types";
import httpService from "./http.service";

const userRoposService = {
  getUserRepos: async (name: string, page: number = 1) => {
    const { data } = await httpService.get(name + "/repos", {
      params: {
        per_page: 4,
        sort: "created",
        page,
      },
    });
    return data as IRepo[];
  },
};

export default userRoposService;
