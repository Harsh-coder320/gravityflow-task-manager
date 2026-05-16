import { useState } from "react";

import { useNavigate, Link } from "react-router-dom";

import axios from "axios";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "Member",
    adminSecret: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://gravityflow-task-manager-production-793e.up.railway.app/api/auth/register",
        formData,
      );

      alert("Registration successful");

      if (formData.role === "Admin") {
        navigate("/login/admin");
      } else {
        navigate("/login/member");
      }
    } catch (error) {
      console.log(error);

      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-black p-8 rounded-2xl w-full max-w-md"
      >
        <h1 className="text-3xl font-bold mb-6 text-center">Create Account</h1>

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-3 rounded-lg bg-gray-800 mb-4"
        >
          <option value="Member">Register as Member</option>

          <option value="Admin">Register as Admin</option>
        </select>

        {formData.role === "Admin" && (
          <input
            type="password"
            name="adminSecret"
            placeholder="Admin Secret Key"
            value={formData.adminSecret}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-800 mb-6"
            required
          />
        )}

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold"
        >
          Register
        </button>

        <p className="text-center mt-6 text-gray-400">
          Already have an account?{" "}
          <Link to="/login/member" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}
