import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://172.16.254.119:9000/api",
});

// apiClient.get("/listings").then((response) => {
//   if (!response.ok) {
//     response.problem;
//   }
// });

export default apiClient;
