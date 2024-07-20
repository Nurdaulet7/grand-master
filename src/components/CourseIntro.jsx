import React, { useContext } from "react";
import styles from "./CourseIntro.module.css";

const CourseIntro = ({ courseData }) => {
  if (!courseData || !courseData.program) {
    return <div>Loading...</div>; // или вернуть что-то другое, если данных нет
  }

  return (
    <section className={styles["intro-section"]}>
      <div className={styles["intro-section__content"]}>
        <div className={styles["intro-section__text-container"]}>
          <h1 className={styles["intro-section__title"]}>{courseData.topic}</h1>
          <p className={styles["intro-section__description"]}>
            {courseData.description}
          </p>
        </div>
        <div className={styles["intro-section__image-container"]}>
          <img
            src={courseData.img}
            alt="course"
            className={styles["intro-section__image"]}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;
