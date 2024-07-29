import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import WebPage from "./pages/CoursePages/WebPage";
import { CourseProvider } from "./context/CourseContext";
import JavaPage from "./pages/CoursePages/JavaPage";
import SystemAdmin from "./pages/CoursePages/SystemAdmin";
import ScrollToTop from "./components/ScrollToTop";
import FrontendPage from "./pages/CoursePages/FrontendPage";
import PythonPage from "./pages/CoursePages/PythonPage";

function App() {
  return (
    <CourseProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/webdev" element={<WebPage />} />
          <Route path="/java" element={<JavaPage />} />
          <Route path="/system-admin" element={<SystemAdmin />} />
          <Route path="/front" element={<FrontendPage />} />
          <Route path="/python" element={<PythonPage />} />
        </Routes>
      </BrowserRouter>
    </CourseProvider>
  );
}

export default App;
