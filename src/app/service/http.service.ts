import axios from "axios";

const http = axios.create({
  baseURL: "https://api.github.com/users/",
});

const httpService = {
  get: http.get,
};

export default httpService;
