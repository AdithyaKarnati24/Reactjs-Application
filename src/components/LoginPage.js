import { useState } from "react";

export default function LoginPage({ onLogin, goToSignup, goToForgotPassword }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Please enter both username and password.");
    } else {
      setError("");
      const loginSuccess = onLogin(username, password);
      if (!loginSuccess) {
        setError("Invalid username or password.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back! <br></br>
          <h2>Login to your account</h2>
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-6">
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
            placeholder="Password"
            className="w-full p-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button onClick={goToForgotPassword} className="text-blue-400 hover:underline">
            Forgot Password?
          </button>
          <button onClick={goToSignup} className="text-blue-400 hover:underline">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}
