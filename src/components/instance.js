import axios from "axios";

const API_KEY = "ca9045f61d5e8f3464c7a15a236c66b3";

export const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 3000,
  params: {
    api_key: API_KEY,
  },
});