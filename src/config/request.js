import axios from "axios";

export const request = axios.create({
  baseURL: "https://market-backend-zeta.vercel.app",
});
