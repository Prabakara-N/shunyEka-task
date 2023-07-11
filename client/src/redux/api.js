import axios from "axios";

const API = axios.create({ baseURL: "https://shunyeka.onrender.com" });

export const createUser = (userData) => API.post("/user", userData);
export const getUsers = () => API.get("/user");
export const deleteUser = (id) => API.delete(`/user/${id}`);
export const updateUser = (updatedUser, id) =>
  API.patch(`/user/${id}`, updatedUser);
export const singleUser = (id) => API.get(`/user/${id}`);
