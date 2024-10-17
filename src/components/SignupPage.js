import { useState } from "react";

export default function SignupPage({ onSignup, goToLogin }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required.");
    }
    else if (password.length < 8) {
      setError("Password must be at least 8 characters.");
    } 
    else if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      const newUser = { username, email, password };
      onSignup(newUser); 
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-pink-500">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Create an Account
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-4 bg-gray-100 rounded-lg focus:ring-2 focus:ring-pink-400 focus:outline-none"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <button
          onClick={goToLogin}
          className="mt-4 text-pink-400 hover:underline"
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
}
