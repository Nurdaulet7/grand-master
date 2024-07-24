import React from "react";
import vacancyImage from "../images/vacancy.png";
import salaryImage from "../images/salary.png";
import styles from "./SpecialistInfo.module.css";

const SpecialistInfo = ({ courseData }) => {
  return (
    <div className={styles["specialist-info"]}>
      <div className={styles["specialist-info__title"]}>
        <h1>{courseData.speciality_infos.speciality}</h1>
        <h3>{courseData.speciality_infos.responsibility}</h3>
        <ul className={styles["specialist-info__list"]}>
          {courseData.speciality_infos.responsibilityList.map(
            (responsibility, index) => (
              <li key={index} className={styles["specialist-info__item"]}>
                {responsibility}
              </li>
            )
          )}
        </ul>
      </div>
      <div className={styles["specialist-info__salary"]}>
        <h2>Средняя зарплата</h2>
        <div className={styles["specialist-info__salary__inner"]}>
          <div className={styles["specialist-info__salary__inner__card"]}>
            <h3>Опубликованных вакансий</h3>
            <p>{courseData.speciality_infos.vacancyNumber}</p>
            <img src={vacancyImage} alt="vacancy image" />
          </div>
          <div className={styles["specialist-info__salary__inner__card"]}>
            <h3>Средняя зарплата</h3>
            <p>{courseData.speciality_infos.salary}</p>
            <img src={salaryImage} alt="salary image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialistInfo;
