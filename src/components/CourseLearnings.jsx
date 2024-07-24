import React from "react";
import cn from "classnames";
import styles from "./CourseLearnings.module.css";

const CourseLearnings = ({ courseData }) => {
  return (
    <div className={cn(styles["course-learnings"])}>
      <div className={styles["course-learnings__title"]}>
        <h1>Чему вы научитесь</h1>
        <p>
          Ваш процесс обучения основан на реальных практиках IT-специалистов. С
          первого урока вы учитесь программированию и пишете код; на занятиях
          работаете с реальными задачами
        </p>
      </div>
      <div className={styles["course-learnings__list"]}>
        {courseData.courseLearnings.map((learning, index) => (
          <div className={styles["course-learnings__list__item"]}>
            <div className={styles["course-learnings__list__item__inner"]}>
              <p>{index + 1}</p>
              <div className={styles["course-learnings__list__item__text"]}>
                <h3>{learning.title}</h3>
                <p>{learning.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseLearnings;
