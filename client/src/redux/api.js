import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const createUser = (userData) => API.post("/user", userData);
export const getUsers = () => API.get("/user");
