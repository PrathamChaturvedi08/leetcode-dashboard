import axiosInstance from "./axios";

export const loginUser = async (credentials) => {
  const { data } = await axiosInstance.post("/auth/login", credentials);

  return data;
};

export const registerUser = async (user) => {
  const { data } = await axiosInstance.post("/auth/register", user);

  return data;
};
