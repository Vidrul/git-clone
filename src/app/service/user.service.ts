import { IUser } from "../types/types";
import httpService from "./http.service";

const userService = {
  getUser: async (payload: string) => {
    const { data } = await httpService.get(payload);
    return data as IUser;
  },
};

export default userService;
