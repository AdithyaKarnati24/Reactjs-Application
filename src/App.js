import "./App.css";
import { useState } from "react";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import DashboardPage from "./components/DashboardPage";
import ForgotPasswordPage from "./components/ForgotPasswordPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("login");
  const [users, setUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  const handleLogin = (username, password) => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setAuthenticatedUser(user);
      setCurrentPage("dashboard");
      return true;
    } else {
      return false;
    }
  };

  const handleSignup = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setCurrentPage("login");
  };

  const handleLogout = () => {
    setAuthenticatedUser(null);
    setCurrentPage("login");
  };

  const handlePasswordReset = (username, newPassword) => {
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex !== -1) {
      const updatedUsers = [...users];
      updatedUsers[userIndex].password = newPassword;
      setUsers(updatedUsers);
      setCurrentPage("login");
      return true;
    }
    return false;
  };
  return (
    <>
      {currentPage === "login" && (
        <LoginPage
          onLogin={handleLogin}
          goToSignup={() => setCurrentPage("signup")}
          goToForgotPassword={() => setCurrentPage("forgotPassword")}
        />
      )}
      {currentPage === "signup" && (
        <SignupPage onSignup={handleSignup} goToLogin={() => setCurrentPage("login")} />
      )}
      {currentPage === "dashboard" && (
        <DashboardPage onLogout={handleLogout} user={authenticatedUser} />
      )}
      {currentPage === "forgotPassword" && (
        <ForgotPasswordPage onResetPassword={handlePasswordReset} goToLogin={() => setCurrentPage("login")} />
      )}
    </>
  );
}
