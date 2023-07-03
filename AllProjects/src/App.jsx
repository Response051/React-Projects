// import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Birthday from "./Pages/Birthday/Birthday";
import Todo from "./Pages/to-do-app/to-do";
import LandingPage from "./Pages/LandingPage";
import MainApp from "./Pages/ToursApp/MainApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/BirthdayPage" element={<Birthday />} />
      <Route path="/TodoPage" element={<Todo />} />
      <Route path="/ToursPage" element={<MainApp />} />
    </Routes>
  );
}

export default App;
