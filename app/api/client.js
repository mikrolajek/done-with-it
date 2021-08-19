import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.16.254.35:9000/api",
});

export default apiClient;
