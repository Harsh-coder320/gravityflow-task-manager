import TaskCard from "./TaskCard";

export default function MemberDashboard({
  memberTasks,
  user,
  moveTask,
  removeTask,
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold">Member Dashboard</h1>

          <p className="text-gray-400 mt-2">Welcome back, {user?.name}</p>
        </div>

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

      <div className="bg-black p-6 rounded-2xl mb-8">
        <h2 className="text-2xl font-bold mb-2 text-blue-400">Your Tasks</h2>

        <p className="text-gray-400">
          Total Assigned Tasks: {memberTasks.length}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memberTasks.length === 0 ? (
          <p className="text-gray-400">No tasks assigned</p>
        ) : (
          memberTasks.map((task) => (
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
  );
}
