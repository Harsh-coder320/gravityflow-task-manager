import TaskCard from "./TaskCard";
import AnalyticsCards from "./AnalyticsCards";

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

          <select
            name="assignedTo"
            value={formData.assignedTo}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-800"
          >
            <option value="">Assign User</option>

            {users.map((user) => (
              <option key={user._id} value={user._id}>
                {user.name}
              </option>
            ))}
          </select>

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
