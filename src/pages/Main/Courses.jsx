import React from "react";
import course1 from "../../images/course1.png";
import course2 from "../../images/course2.png";
import course3 from "../../images/course3.png";
import course4 from "../../images/course4.png";
import course5 from "../../images/course5Python.png";
import styles from "./Courses.module.css";

let courses = [
  {
    photo: course1,
    title: "Веб-разработчик для начинающих",
    description:
      "Это увлекательное путешествие в мир современной веб-технологии и программирования, созданное специально для абсолютных новичков.",
    slug: "course1",
  },
  {
    photo: course2,
    title: "Системный администратор",
    description:
      "Начните свой путь к карьере системного администратора с нулевых знаний и в короткие сроки освойте фундаментальные принципы управления IT-инфраструктурой.",
    slug: "course2",
  },
  {
    photo: course3,
    title: "Java-разработчик с нуля",
    description:
      "это погружение в увлекательный мир программирования на языке Java, созданный специально для тех, кто хочет освоить навыки разработки программ и веб-приложений.",
    slug: "course3",
  },
  {
    photo: course4,
    title: "FRONT-END РАЗРАБОТчик",
    description:
      "После завершения курса по Frontend-разработке вы приобретете навыки создания пользовательских интерфейсов для сайтов любой сложности.",
    slug: "course4",
  },
  {
    photo: course5,
    title: "Python-разработчик",
    description:
      "Изучение Python легко освоить даже для абсолютных новичков в программировании. Во время обучения вас будет сопровождать опытный куратор.",
    slug: "course5",
  },
];

const Courses = () => {
  return (
    <>
      {courses.map((course, index) => (
        <div key={index} className={styles["course-card"]}>
          <img src={course.photo} alt={course.title} />
          <div className={styles["course-text"]}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
          <a href="">подробности</a>
        </div>
      ))}
    </>
  );
};

export default Courses;
