import React, { createContext, useState } from "react";

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [courseData, setCourseData] = useState(null);

  return (
    <CourseContext.Provider value={{ courseData, setCourseData }}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContext;
