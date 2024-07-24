import React, { useContext } from "react";
import styles from "./CourseContent.module.css";
import CourseIntro from "./CourseIntro";
import CourseDetails from "./CourseDetails";
import CourseContext from "../context/CourseContext";

const CourseContent = ({ headerHeight }) => {
  const { courseData } = useContext(CourseContext);

  if (!courseData) {
    return <div>Loading...</div>;
  }
  return (
    <main className={styles["content"]} style={{ marginTop: headerHeight }}>
      <CourseIntro courseData={courseData} />
      <CourseDetails courseData={courseData} />
    </main>
  );
};

export default CourseContent;
