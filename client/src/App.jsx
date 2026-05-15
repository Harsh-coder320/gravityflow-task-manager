import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import {
  getTasks,
  createTask,
  updateTaskStatus,
  deleteTask,
  getUsers,
  getProjects,
  createProject,
} from "./api/taskApi";

import AdminDashboard from "./components/AdminDashboard";

import MemberDashboard from "./components/MemberDashboard";

import LandingPage from "./pages/LandingPage";

import LoginPage from "./pages/LoginPage";

import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [projects, setProjects] = useState([]);

  const user = JSON.parse(localStorage.getItem("user"));

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "Medium",
    status: "Todo",
    assignedTo: "",
    project: "",
  });

  const [projectData, setProjectData] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    if (user) {
      fetchTasks();
      fetchUsers();
      fetchProjects();
    }
  }, []);

  const fetchTasks = async () => {
    try {
      const { data } = await getTasks();

      setTasks(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUsers = async () => {
    try {
      const { data } = await getUsers();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProjects = async () => {
    try {
      const { data } = await getProjects();

      setProjects(data);
    } catch (error) {
      console.log(error);
    }
  };

  const moveTask = async (id, newStatus) => {
    try {
      await updateTaskStatus(id, newStatus);

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProjectChange = (e) => {
    setProjectData({
      ...projectData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createTask(formData);

      fetchTasks();

      setFormData({
        title: "",
        description: "",
        priority: "Medium",
        status: "Todo",
        assignedTo: "",
        project: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProject(projectData);

      fetchProjects();

      setProjectData({
        name: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const todoTasks = tasks.filter((task) => task.status === "Todo");

  const progressTasks = tasks.filter((task) => task.status === "In Progress");

  const completedTasks = tasks.filter((task) => task.status === "Completed");

  const memberTasks = tasks.filter(
    (task) => task.assignedTo?._id === user?._id,
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              user.role === "Admin" ? (
                <AdminDashboard
                  tasks={tasks}
                  todoTasks={todoTasks}
                  progressTasks={progressTasks}
                  completedTasks={completedTasks}
                  users={users}
                  projects={projects}
                  formData={formData}
                  projectData={projectData}
                  handleChange={handleChange}
                  handleProjectChange={handleProjectChange}
                  handleSubmit={handleSubmit}
                  handleProjectSubmit={handleProjectSubmit}
                  moveTask={moveTask}
                  removeTask={removeTask}
                  user={user}
                />
              ) : (
                <MemberDashboard
                  memberTasks={memberTasks}
                  user={user}
                  moveTask={moveTask}
                  removeTask={removeTask}
                />
              )
            ) : (
              <LandingPage />
            )
          }
        />

        <Route path="/login/:role" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
