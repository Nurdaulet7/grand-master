import React from "react";
import styles from "./CourseCriteria.module.css";
import criteriaPng1 from "../images/crit1.png";
import criteriaPng2 from "../images/crit2.png";
import criteriaPng3 from "../images/crit3.png";
import criteriaPng4 from "../images/crit4.png";
import criteriaPng5 from "../images/crit5.png";
import criteriaPng6 from "../images/crit6.png";
import cn from "classnames";

let criteriaPngs = [
  criteriaPng1,
  criteriaPng2,
  criteriaPng3,
  criteriaPng4,
  criteriaPng5,
  criteriaPng6,
];

const CourseCriteria = ({ courseData }) => {
  return (
    <div className={styles["course-criteria"]}>
      <h1>Критерий отбора</h1>
      <div className={styles["course-criteria__container"]}>
        {courseData.criterias.map((criteria, index) => {
          const reverseClass =
            index === 1 || index === 2 || index === 5 ? styles["reverse"] : "";
          const reverseMobileClass =
            index % 2 === 1 ? styles["mb-reverse"] : "";
          return (
            <div
              className={cn(
                styles["course-criteria__container__inner"],
                reverseClass,
                reverseMobileClass
              )}
            >
              <div className={styles["course-criteria__img"]}>
                <img src={criteriaPngs[index]} alt="criteria-png" />
              </div>
              <div className={styles["course-criteria__texts"]}>
                <h3>{criteria.title}</h3>
                <p>{criteria.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCriteria;
