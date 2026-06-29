import axiosInstance from "./axios";

export const syncProfile = async () => {
  const { data } = await axiosInstance.post("/sync");

  return data;
};
