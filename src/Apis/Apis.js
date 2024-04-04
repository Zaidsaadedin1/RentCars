const BACK_END_BASE_URL = "";
export const apis = {
  getUsers: () => axiosInstance.get("/users"),
  addUser: (userData) => axiosInstance.post("/users", userData),
  deleteUser: (userId) => axiosInstance.delete(`/users/${userId}`),
  updateUser: (userId, updatedData) =>
    axiosInstance.put(`/users/${userId}`, updatedData),
};
