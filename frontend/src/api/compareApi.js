import axiosInstance from "./axios";

export const compareSnapshots = async (snapshotId) => {
  const { data } = await axiosInstance.get(`/analytics/compare/${snapshotId}`);

  return data;
};
