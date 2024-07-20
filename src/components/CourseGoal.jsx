import React from "react";
import goalImg from "../images/goal1.png";
import styles from "./CourseGoal.module.css";

const CourseGoal = ({ courseData }) => {
  if (!courseData || !courseData.program) {
    return <div>Loading...</div>; // или вернуть что-то другое, если данных нет
  }
  return (
    <div className={styles["course-goal"]}>
      <div className={styles["course-goal__text"]}>
        <h1>Цель курса</h1>
        <p>{courseData.goal}</p>
      </div>
      <div className={styles["course-goal__image"]}>
        <img src={goalImg} alt="image" />
      </div>
    </div>
  );
};

export default CourseGoal;
