import { useState } from "react";

export default function DashboardPage({ user, onLogout }) {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <h1 className="text-xl font-bold">
            Welcome to the Dashboard, {user.username}!
          </h1>
        );
      case "profile":
        return (
          <div>
            <h1 className="text-xl font-bold">User Profile</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
          </div>
        );
        
      case "settings":
        return <h1 className="text-xl font-bold">Settings</h1>;
      default:
        return (
          <h1 className="text-xl font-bold">
            Welcome to the Dashboard, {user.username}!
          </h1>
        );
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Sidebar */}
      <div className="lg:w-64 w-full bg-gray-800 text-white flex flex-col fixed lg:static h-full">
        <h2 className="text-2xl font-bold p-6 border-b border-gray-700">
          Dashboard
        </h2>
        <nav className="flex-1 p-4 space-y-4 overflow-y-auto">
          <button
            className={`w-full text-left p-2 rounded ${
              activeTab === "dashboard" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`w-full text-left p-2 rounded ${
              activeTab === "profile" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("profile")}
          >
            Profile
          </button>
          <button
            className={`w-full text-left p-2 rounded ${
              activeTab === "settings" ? "bg-gray-700" : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            Settings
          </button>
        </nav>
        <button
          className="w-full text-left p-4 text-red-400 hover:bg-gray-700"
          onClick={onLogout}
        >
          Logout
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 lg:ml-0 lg:pl-6 lg:pr-6">
        <div className="bg-white rounded-lg shadow-md p-6 min-h-full">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}