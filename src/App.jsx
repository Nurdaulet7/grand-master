import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import JavaPage from "./pages/CoursePages/JavaPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/java" element={<JavaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
