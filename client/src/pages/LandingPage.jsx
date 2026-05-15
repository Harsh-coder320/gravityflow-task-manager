import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4">
      <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        GravityFlow Task Manager
      </h1>

      <p className="text-gray-300 text-center max-w-2xl mb-10 text-lg">
        Manage projects, assign tasks, collaborate with teams, and track
        workflow efficiently.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <Link
          to="/login/admin"
          className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
        >
          Login as Admin
        </Link>

        <Link
          to="/login/member"
          className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold"
        >
          Login as Member
        </Link>
      </div>

      <Link to="/register" className="mt-8 text-blue-400 hover:underline">
        Create New Account
      </Link>
    </div>
  );
}
