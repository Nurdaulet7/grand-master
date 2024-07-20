import React from "react";
import styles from "./CourseTasks.module.css";

const CourseTasks = ({ courseData }) => {
  if (!courseData || !courseData.program) {
    return <div>Loading...</div>; // или вернуть что-то другое, если данных нет
  }

  return (
    <div className={styles["course-tasks"]}>
      <h1>Задачи курса</h1>
      <div className={styles["course-tasks__container"]}>
        {courseData.tasks.map((task, index) => {
          return (
            <div className={styles["course-tasks__container__inner"]}>
              <div className={styles["course-tasks__container__inner__card"]}>
                <h2>{String(index + 1).padStart(2, "0")}</h2>
                <p>{task}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseTasks;
