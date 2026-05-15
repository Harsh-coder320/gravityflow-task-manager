import TaskCard from "./TaskCard";

export default function MemberDashboard({
  memberTasks,
  user,
  moveTask,
  removeTask,
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
        Member Dashboard
      </h1>

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
