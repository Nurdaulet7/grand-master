import React, { useContext } from "react";
import styles from "./CourseContent.module.css";
import CourseIntro from "./CourseIntro";
import CourseDetails from "./CourseDetails";
import CourseContext from "../context/CourseContext";
import CourseGoal from "./CourseGoal";

const CourseContent = () => {
  const { courseData } = useContext(CourseContext);

  if (!courseData) {
    return <div>Loading...</div>;
  }
  return (
    <main className={styles["content"]}>
      <CourseIntro courseData={courseData} />
      <CourseDetails courseData={courseData} />
    </main>
  );
};

export default CourseContent;
