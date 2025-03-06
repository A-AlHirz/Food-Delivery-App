import axios from "axios";
import { getToken } from "../api/storage";

const instance = axios.create({
  baseURL: "https://react-native-food-delivery-be.eapi.joincoded.com/api/",
});

instance.interceptors.request.use(async (config) => {
  const token = await getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;