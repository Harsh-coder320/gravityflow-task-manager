export default function AnalyticsCards({
  tasks,
  todoTasks,
  progressTasks,
  completedTasks,
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      <div className="bg-blue-600 p-6 rounded-2xl">
        <h2 className="text-xl font-bold">Total Tasks</h2>

        <p className="text-3xl mt-2">{tasks.length}</p>
      </div>

      <div className="bg-yellow-500 p-6 rounded-2xl">
        <h2 className="text-xl font-bold">Todo</h2>

        <p className="text-3xl mt-2">{todoTasks.length}</p>
      </div>

      <div className="bg-purple-600 p-6 rounded-2xl">
        <h2 className="text-xl font-bold">In Progress</h2>

        <p className="text-3xl mt-2">{progressTasks.length}</p>
      </div>

      <div className="bg-green-600 p-6 rounded-2xl">
        <h2 className="text-xl font-bold">Completed</h2>

        <p className="text-3xl mt-2">{completedTasks.length}</p>
      </div>
    </div>
  );
}
