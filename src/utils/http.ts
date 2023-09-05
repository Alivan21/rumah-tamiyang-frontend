import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export const http = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1",
  validateStatus: () => true
});
