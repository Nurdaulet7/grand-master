import React from "react";
import styles from "./CourseContent.module.css";
import CourseIntro from "./CourseIntro";
import CourseDetails from "./CourseDetails";

const CourseContent = () => {
  return (
    <main className={styles["content"]}>
      <CourseIntro />
      <CourseDetails />
    </main>
  );
};

export default CourseContent;
