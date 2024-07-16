import React from "react";
import content_img from "../../images/main-content-img.png";
import styles from "./MainContent.module.css";
import About from "../../components/About";
import CourseDetails from "./CourseDetails";
import Courses from "./Courses";

function MainContent() {
  return (
    <div className={styles.main}>
      <div className={styles["content-1"]}>
        <div className={styles["content-text"]}>
          <div className={styles.text}>
            <h1>Meta school</h1>
            <p>
              Meta Школа - это современная образовательная школа
              программирования, где мы обучаем детей и взрослых искусству
              программирования и информационным технологиям. Мы предлагаем курсы
              на различных уровнях владения, от новичков до продвинутых
              программистов, что позволяет каждому найти подходящий класс для
              обучения.
            </p>
          </div>
          <button>Получить консультацию</button>
        </div>
        <div className={styles["content_img"]}>
          <img src={content_img} alt="img" />
        </div>
      </div>
      <div className={styles["content-2"]}>
        <h1>Почему мы?</h1>
        <div className={styles["content_infos"]}>
          <About />
        </div>
      </div>
      <div className={styles["content-3"]}>
        <h1>Кому подойдет этот курс</h1>
        <div className={styles["course-details"]}>
          <CourseDetails />
        </div>
      </div>
      <div className={styles["content-4"]}>
        <h1>Наши курсы</h1>
        <div className={styles["courses-container"]}>
          <Courses />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
