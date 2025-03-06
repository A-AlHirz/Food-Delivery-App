import instance from "./index";
import { setToken } from "./storage";

const register = async (userInfo, image) => {
  const formData = new FormData();

  for (key in userInfo) {
    formData.append(key, userInfo[key]);
  }
  formData.append("image", {
    name: "image.jpeg",
    type: "image/jpeg",
    uri: image,
  });
  const res = await instance.post("/auth/register", formData);

  console.log(res);

  setToken(res.data.token);

  return res.data;
};

const login = async (userInfo) => {
  const res = await instance.post("/auth/login", userInfo);

  console.log("LOGIN TOKEN", res.data.token);
  setToken(res.data.token);
  return res.data;
};

const profile = async (userInfo) => {
  const res = await instance.post("/auth/profile", userInfo);

  console.log("LOGIN TOKEN", res.data.token);
  setToken(res.data.token);
  return res.data;
};

export { login, register, profile };