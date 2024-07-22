import React, { useContext } from "react";
import styles from "./CourseDetails.module.css";
import Accordion from "../pages/Main/Accordian";
import kaspi from "../images/kaspiLogo.png";
import jusan from "../images/jusanLogo.png";
import { Form } from "./ConsultationForm";
import CourseGoal from "./CourseGoal";
import CourseTasks from "./CourseTasks";
import CourseCriteria from "./CourseCriteria";

const CourseDetails = ({ courseData }) => {
  if (!courseData || !courseData.program) {
    return <div>Loading...</div>; // или вернуть что-то другое, если данных нет
  }
  return (
    <section className={styles["course-details"]}>
      <div className={styles["course-details__content"]}>
        <div className={styles["course-details__info"]}>
          <div className={styles["course-details__program"]}>
            <h2 className={styles["course-details__title"]}>Программа</h2>
            <div className={styles["course-details__text"]}>
              <p>
                <span className={styles.boldText}>Длительность курса:</span>{" "}
                {courseData.program.duration}
              </p>
              <p>
                <span className={styles.boldText}>
                  Длительность академических часов:
                </span>{" "}
                {courseData.program.hours}
              </p>
              <p>
                <span className={styles.boldText}>Формат обучения:</span>{" "}
                {courseData.program.format}
              </p>
              <p>
                <span className={styles.boldText}>Формы занятий:</span>{" "}
                {courseData.program.sessionFormat}
              </p>
            </div>
          </div>
          <div className={styles["course-details__course-content"]}>
            <h2 className={styles["course-details__title"]}>
              Содержание курса
            </h2>
            <p>
              Наша программа обучения сосредоточена на практическом опыте. В
              процессе обучения вы освоите работу по пайплайну реальных студий,
              создадите впечатляющее портфолио и получите конструктивную
              обратную связь.
            </p>
            <Accordion forCoursePage data={courseData.courseContent} />
          </div>
        </div>
        <aside className={styles["couse-details__sidebar"]}>
          <div className={styles["price-card"]}>
            <h3>Стоимость обучения:</h3>
            <div className={styles["price-card__total-cost"]}>
              <h4>
                480 000<span className={styles["currency"]}>₸</span>
              </h4>
              <p className={styles["text-with-dot"]}>Полная стоимость</p>
            </div>
            <div className={styles["price-card__month-cost"]}>
              <h4>
                80 000<span className={styles["currency"]}>₸/мес.</span>
              </h4>
              <div className={styles["payment-option-card"]}>
                <div className={styles["payment-option-card__inner"]}>
                  <img src={kaspi} alt="" />
                  <span className={styles["payment-option-card__text"]}>
                    0&nbsp;&middot;&nbsp;0&nbsp;&middot;&nbsp;6
                  </span>
                </div>
                <div className={styles["payment-option-card__inner"]}>
                  <img src={jusan} alt="" />
                  <span className={styles["payment-option-card__text"]}>
                    0&nbsp;&middot;&nbsp;0&nbsp;&middot;&nbsp;6
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["form"]}>
            <Form forCoursePage={true} />
          </div>
          <div className={styles["skills-card"]}>
            <h2>Навыки</h2>
            <div className={styles["skills-card__inner"]}>
              <ul>
                {courseData.skills.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>
      <div className={styles["course-goal"]}>
        <CourseGoal courseData={courseData} />
      </div>
      <div className={styles["course-tasks"]}>
        <CourseTasks courseData={courseData} />
      </div>
      <div className={styles["course-criteria"]}>
        <CourseCriteria courseData={courseData} />
      </div>
    </section>
  );
};

export default CourseDetails;
