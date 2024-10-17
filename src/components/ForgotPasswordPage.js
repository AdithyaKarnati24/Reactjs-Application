import { useState } from "react";

export default function ForgotPasswordPage({ onResetPassword, goToLogin }) {
  const [username, setUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    const success = onResetPassword(username, newPassword);
     if (newPassword.length < 8) {
        alert("Password must be at least 8 characters.");}
    else if (success) {
      setMessage("Password reset successfully! Please login.");
    } else {
      setMessage("User not found. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Reset Password
        </h2>
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}
        <form onSubmit={handleReset} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full p-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Reset Password
          </button>
        </form>
        <button
          onClick={goToLogin}
          className="mt-4 text-blue-400 hover:underline"
        >
          Back to Login
        </button>
      </div>
    </div>
  );
}
