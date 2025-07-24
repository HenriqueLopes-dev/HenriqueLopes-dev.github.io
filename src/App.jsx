import React from "react";
import { Sidebar } from "./components/Sidebar";
import { MainContent } from "./components/MainContent";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-900 text-white">
      <Sidebar />

      {/* Linha vertical entre os dois */}
      <div className="w-1 bg-gray-800" />

      <MainContent />
    </div>
  );
};

export default App;
