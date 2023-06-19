import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Birthday from "./Pages/Birthday/Birthday";
import Todo from "./Pages/to-do-app/to-do";
import LandingPage from "./Pages/LandingPage";

function App() {

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/BirthdayPage" element={<Birthday />} />
      <Route path="/TodoPage" element={<Todo />} />
    </Routes>
  );
}

export default App;
