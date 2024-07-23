import React from "react";
import styles from "./AboutCourse.module.css";
import work1 from "../images/work1.png";
import work2 from "../images/work2.png";
import work3 from "../images/work3.png";
import work4 from "../images/work4.png";

let workImages = [work1, work2, work3, work4];

const AboutCourse = ({ courseData }) => {
  return (
    <div className={styles["course-work"]}>
      <h1>Критерий отбора</h1>
      <p>
        Освойте Веб-разработку и получите востребованные навыки данной профессии
      </p>
      <div className={styles["course-work__inner"]}>
        {courseData.workTypes.map((work, index) => (
          <div className={styles["course-work__inner__card"]}>
            <img src={workImages[index]} alt="workPng" />
            <h2>{work.title}</h2>
            <p>{work.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutCourse;
