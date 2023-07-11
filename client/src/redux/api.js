import axios from "axios";

const devEnv = process.env.NODE_ENV !== "production";

const { REACT_APP_DEV_API, REACT_APP_PROD_API } = process.env;

const API = axios.create({
  baseURL: `${devEnv ? REACT_APP_DEV_API : REACT_APP_PROD_API}`,
});

export const createUser = (userData) => API.post("/user", userData);
export const getUsers = () => API.get("/user");
export const deleteUser = (id) => API.delete(`/user/${id}`);
export const updateUser = (updatedUser, id) =>
  API.patch(`/user/${id}`, updatedUser);
export const singleUser = (id) => API.get(`/user/${id}`);
