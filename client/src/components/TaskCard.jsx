export default function TaskCard({ task, user, moveTask, removeTask }) {
  return (
    <div className="bg-gray-800 p-4 rounded-xl mb-4">
      <h3 className="font-bold text-lg">{task.title}</h3>

      <p className="text-gray-300 text-sm mt-2">{task.description}</p>

      <p className="text-blue-300 text-sm mt-2">
        Assigned To: {task.assignedTo?.name || "Unassigned"}
      </p>

      <p className="text-purple-300 text-sm mt-2">
        Project: {task.project?.name || "No Project"}
      </p>

      <div className="flex justify-between items-center mt-4">
        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm">
          {task.priority}
        </span>
      </div>

      <div className="flex gap-2 mt-4 flex-wrap">
        <button
          onClick={() => moveTask(task._id, "Todo")}
          className="bg-blue-500 px-3 py-1 rounded-lg text-sm"
        >
          Todo
        </button>

        <button
          onClick={() => moveTask(task._id, "In Progress")}
          className="bg-yellow-500 px-3 py-1 rounded-lg text-sm text-black"
        >
          Progress
        </button>

        <button
          onClick={() => moveTask(task._id, "Completed")}
          className="bg-green-600 px-3 py-1 rounded-lg text-sm"
        >
          Complete
        </button>

        {user?.role === "Admin" && (
          <button
            onClick={() => removeTask(task._id)}
            className="bg-red-700 px-3 py-1 rounded-lg text-sm"
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
}
