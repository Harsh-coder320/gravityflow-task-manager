import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export const getTasks = () => API.get("/tasks");

export const createTask = (taskData) => API.post("/tasks", taskData);

export const updateTaskStatus = (id, status) =>
  API.put(`/tasks/${id}`, {
    status,
  });

export const deleteTask = (id) => API.delete(`/tasks/${id}`);

export const getUsers = () => API.get("/auth/users");

export const getProjects = () => API.get("/projects");

export const createProject = (projectData) =>
  API.post("/projects", projectData);
