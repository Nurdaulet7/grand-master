import React from "react";
import styles from "./InfoCard.module.css";

const InfoCard = ({ data, additionalProperty = false }) => {
  return (
    <>
      {data.map((item, index) => (
        <div key={index} className={styles["card-container"]}>
          <img src={item.img} alt="card-img" />
          <div className={styles["text-container"]}>
            <p>{item.text}</p>
            <p className={styles.role}>{additionalProperty && item.role}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default InfoCard;
