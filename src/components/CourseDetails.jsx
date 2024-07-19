import React from "react";
import styles from "./CourseDetails.module.css";
import Accordion from "../pages/Main/Accordian";
import kaspi from "../images/kaspiLogo.png";
import jusan from "../images/jusanLogo.png";

const CourseDetails = () => {
  return (
    <section className={styles["course-details"]}>
      <div className={styles["course-details__content"]}>
        <div className={styles["course-details__info"]}>
          <div className={styles["course-details__program"]}>
            <h2 className={styles["course-details__title"]}>Программа</h2>
            <div className={styles["course-details__text"]}>
              <p>
                <span className={styles.boldText}>Длительность курса:</span> 26
                недель 3 урока в неделях
              </p>
              <p>
                <span className={styles.boldText}>
                  Длительность академических часов:
                </span>{" "}
                156 часов
              </p>
              <p>
                <span className={styles.boldText}>Формат обучения:</span> 26
                недель 3 урока в неделях
              </p>
              <p>
                <span className={styles.boldText}>Формы занятий:</span> 26
                недель 3 урока в неделях
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
            <Accordion forCoursePage />
          </div>
        </div>
        <aside className={styles["couse-details__sidebar"]}>
          <div className={styles["price-card"]}>
            <h3>Стоимость обучения:</h3>
            <div className={styles["price-card__total-cost"]}>
              <h4>480 000 ₸</h4>
              <p className={styles["text-with-dot"]}>Полная стоимость</p>
            </div>
            <div className={styles["price-card__month-cost"]}>
              <h4>80 000 ₸/мес.</h4>
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
          <div className={styles["form"]}></div>
          <div className={styles["skills-card"]}></div>
        </aside>
      </div>
    </section>
  );
};

export default CourseDetails;
