import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createUser = (userData) => API.post("/user", userData);
export const getUsers = () => API.get("/user");
export const deleteUser = (id) => API.delete(`/user/${id}`);
export const updateUser = (updatedUser, id) =>
  API.patch(`/user/${id}`, updatedUser);
export const sigleUser = (id) => API.get(`/user/${id}`);
