import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import WebPage from "./pages/CoursePages/WebPage";
import { CourseProvider } from "./context/CourseContext";
import JavaPage from "./pages/CoursePages/JavaPage";
import SystemAdmin from "./pages/CoursePages/SystemAdmin";

function App() {
  return (
    <CourseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/webdev" element={<WebPage />} />
          <Route path="/java" element={<JavaPage />} />
          <Route path="/system-admin" element={<SystemAdmin />} />
        </Routes>
      </BrowserRouter>
    </CourseProvider>
  );
}

export default App;
