import { useState } from "react";

import TaskCard from "./TaskCard";
import AnalyticsCards from "./AnalyticsCards";

import { makeAdmin } from "../api/taskApi";

export default function AdminDashboard({
  tasks,
  todoTasks,
  progressTasks,
  completedTasks,
  users,
  projects,
  formData,
  projectData,
  handleChange,
  handleProjectChange,
  handleSubmit,
  handleProjectSubmit,
  moveTask,
  removeTask,
  user,
}) {
  const [memberSearch, setMemberSearch] = useState("");

  const [assignSearch, setAssignSearch] = useState("");

  const handleMakeAdmin = async (id) => {
    try {
      await makeAdmin(id);

      alert("User promoted to Admin successfully");

      window.location.reload();
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Failed");
    }
  };

  const filteredMembers = users.filter((member) =>
    member.name.toLowerCase().includes(memberSearch.toLowerCase()),
  );

  const filteredAssignUsers = users.filter((member) =>
    member.name.toLowerCase().includes(assignSearch.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <h1 className="text-3xl md:text-5xl font-bold">Admin Dashboard</h1>

        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.location.reload();
          }}
          className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      <AnalyticsCards
        tasks={tasks}
        todoTasks={todoTasks}
        progressTasks={progressTasks}
        completedTasks={completedTasks}
      />

      {/* TEAM MEMBERS SECTION */}
      <div className="bg-black p-6 rounded-2xl mb-8">
        <h2 className="text-2xl font-bold mb-4 text-purple-400">
          Team Members
        </h2>

        <input
          type="text"
          placeholder="Search Members..."
          value={memberSearch}
          onChange={(e) => setMemberSearch(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
        />

        <div className="space-y-4">
          {filteredMembers.map((member) => (
            <div
              key={member._id}
              className="flex justify-between items-center bg-gray-800 p-4 rounded-xl"
            >
              <div>
                <p className="font-semibold">{member.name}</p>

                <p className="text-sm text-gray-400">{member.email}</p>

                <p className="text-sm text-yellow-400">Role: {member.role}</p>
              </div>

              {member.role !== "Admin" && (
                <button
                  onClick={() => handleMakeAdmin(member._id)}
                  className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg"
                >
                  Make Admin
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CREATE PROJECT */}
      <form
        onSubmit={handleProjectSubmit}
        className="bg-black p-6 rounded-2xl mb-8 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Create Project</h2>

        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={projectData.name}
          onChange={handleProjectChange}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
          required
        />

        <textarea
          name="description"
          placeholder="Project Description"
          value={projectData.description}
          onChange={handleProjectChange}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
          required
        />

        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold"
        >
          Create Project
        </button>
      </form>

      {/* CREATE TASK */}
      <form
        onSubmit={handleSubmit}
        className="bg-black p-6 rounded-2xl mb-8 max-w-3xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">Create Task</h2>

        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
          required
        />

        <textarea
          name="description"
          placeholder="Task Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <select
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800"
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800"
          >
            <option>Todo</option>
            <option>In Progress</option>
            <option>Completed</option>
          </select>

          <div className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Search Assign User..."
              value={assignSearch}
              onChange={(e) => setAssignSearch(e.target.value)}
              className="w-full p-3 rounded-lg bg-gray-800"
            />

            <select
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleChange}
              className="p-3 rounded-lg bg-gray-800"
            >
              <option value="">Assign User</option>

              {filteredAssignUsers.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>

          <select
            name="project"
            value={formData.project}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800"
          >
            <option value="">Select Project</option>

            {projects.map((project) => (
              <option key={project._id} value={project._id}>
                {project.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          Create Task
        </button>
      </form>

      {/* TASK SECTIONS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-black p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-blue-400">Todo</h2>

          {todoTasks.length === 0 ? (
            <p className="text-gray-400">No tasks available</p>
          ) : (
            todoTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                user={user}
                moveTask={moveTask}
                removeTask={removeTask}
              />
            ))
          )}
        </div>

        <div className="bg-black p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            In Progress
          </h2>

          {progressTasks.length === 0 ? (
            <p className="text-gray-400">No tasks available</p>
          ) : (
            progressTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                user={user}
                moveTask={moveTask}
                removeTask={removeTask}
              />
            ))
          )}
        </div>

        <div className="bg-black p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-green-400">Completed</h2>

          {completedTasks.length === 0 ? (
            <p className="text-gray-400">No tasks available</p>
          ) : (
            completedTasks.map((task) => (
              <TaskCard
                key={task._id}
                task={task}
                user={user}
                moveTask={moveTask}
                removeTask={removeTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
