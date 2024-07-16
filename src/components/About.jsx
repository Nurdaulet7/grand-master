import React from "react";
import about1 from "../images/about1.png";
import about2 from "../images/about2.png";
import about3 from "../images/about3.png";
import about4 from "../images/about4.png";
import styles from "../components/About.module.css";

let posts = [
  {
    photo: about1,
    title: "Удобное офлайн и онлайн обучение",
    text: "Вы можете заниматься из любой точки мира, имея лишь компьютер и  доступ к сети Интернет.",
  },
  {
    photo: about2,
    title: "Опытные наставники-практики",
    text: "Обучение проводят наставники с высшим инженерным образованием и практическим опытом работы.",
  },
  {
    photo: about3,
    title: "Получение практических навыков",
    text: "Работа с инженерными инструментами и материалами, создание реальных поделок и проектов, а также изучение цифровых технологий в компьютерных программах.",
  },
  {
    photo: about4,
    title: "Гибкий формат обучения",
    text: "Мы предлагаем как очное обучение, так и дистанционное, что позволяет студентам учиться в удобном для них темпе и расписании.",
  },
];

function About() {
  return (
    <>
      {posts.map((post, index) => (
        <div
          key={index}
          className={`${styles.post} ${index % 2 === 1 ? styles.reverse : ""}`}
        >
          <img src={post.photo} alt={post.title} />
          <div className={styles["post-text"]}>
            <h2>{post.title}</h2>
            <p>{post.text}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default About;
