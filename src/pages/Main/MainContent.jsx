import React from "react";
import content_img from "../../images/main-content-img.png";
import styles from "./MainContent.module.css";
import About from "../../components/About";
import CourseDetails from "./CourseDetails";
import Courses from "./Courses";
import CourseSteps from "./CourseSteps";
import LearningOutcomes from "./LearningOutcomes";
import cn from "classnames";
import Teachers from "./Teachers";
import Accordion from "./Accordian";
import Partners from "./Partners";

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
        <img src={content_img} alt="img" />
      </div>
      <div className={cn(styles["content-2"])}>
        <h1>Почему мы?</h1>
        <div className={styles["content_infos"]}>
          <About />
        </div>
      </div>
      <div className={cn(styles["content-3"], styles.title)}>
        <h1>Кому подойдет этот курс</h1>
        <div className={styles["course-details"]}>
          <CourseDetails />
        </div>
      </div>
      <div className={cn(styles["content-4"], styles.title)}>
        <h1>Наши курсы</h1>
        <div className={styles["courses-container"]}>
          <Courses />
        </div>
      </div>
      <div className={cn(styles["content-5"], styles.title)}>
        <h1>Этапы обучения на курсе</h1>
        <div className={styles["course-steps-container"]}>
          <CourseSteps />
        </div>
      </div>
      <div className={cn(styles["content-6"], styles.title)}>
        <h1>Наша команда</h1>
        <div className={styles["slider"]}>{/* <Carousel1 /> */}</div>
      </div>
      <div className={cn(styles["content-7"], styles.title)}>
        <h1>Чему ты научишься на курсе</h1>
        <div className={styles["learning-outcomes-container"]}>
          <LearningOutcomes />
        </div>
      </div>
      <div className={cn(styles["content-8"], styles.title)}>
        <h1>Преподаватели</h1>
        <div className={styles["learning-outcomes-container"]}>
          <Teachers />
        </div>
      </div>
      <div className={cn(styles["content-9"], styles.title2)}>
        <h1>Часто задаваемые вопросы</h1>
        <Accordion />
      </div>
      <div className={cn(styles["content-10"], styles.title2)}>
        <h1>Наши партнеры</h1>
        <div className={styles["partners-container"]}>
          <Partners />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
