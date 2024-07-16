import React from "react";
import comu1 from "../../images/1comu.png";
import comu2 from "../../images/2comu.png";
import comu3 from "../../images/3comu.png";
import styles from "./CourseDetails.module.css";

let posts = [
  {
    photo: comu1,
    title: "Новичкам",
    text: "Вы только начинаете свое знакомство с миром программирования и IT, курсы Meta Школы станут отличной стартовой площадкой. ",
  },
  {
    photo: comu2,
    title: "Студентам",
    text: "Даже для опытных IT специалистов никогда не бывает лишним обновить свои знания и изучить новые технологии. ",
  },
  {
    photo: comu3,
    title: "IT-Специалистам",
    text: "Даже для опытных IT специалистов никогда не бывает лишним обновить свои знания и изучить новые технологии. ",
  },
];

const CourseDetails = () => {
  return (
    <>
      {posts.map((post, index) => (
        <div key={index} className={styles.card}>
          <img src={post.photo} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.text}</p>
        </div>
      ))}
    </>
  );
};

export default CourseDetails;
