import React from "react";
import coursePng from "../images/coursePng1.png";
import styles from "./CourseIntro.module.css";

const CourseIntro = () => {
  return (
    <section className={styles["intro-section"]}>
      <div className={styles["intro-section__content"]}>
        <div className={styles["intro-section__text-container"]}>
          <h1 className={styles["intro-section__title"]}>
            Веб-разработчик для начинающих
          </h1>
          <p className={styles["intro-section__description"]}>
            Курс "Веб-разработчик с нуля" представляет собой интенсивную и
            практически ориентированную программу обучения, разработанную для
            тех, кто хочет освоить навыки веб-разработки с самых основ и создать
            себе успешную карьеру в сфере создания веб-сайтов и веб-приложений.
            Независимо от вашего уровня начальных знаний, этот курс обеспечит
            вас всеми инструментами, чтобы стать компетентным и востребованным
            веб-разработчиком.
          </p>
        </div>
        <div className={styles["intro-section__image-container"]}>
          <img
            src={coursePng}
            alt="course"
            className={styles["intro-section__image"]}
          />
        </div>
      </div>
    </section>
  );
};

export default CourseIntro;
