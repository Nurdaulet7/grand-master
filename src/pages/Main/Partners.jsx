import React from "react";
import partner1 from "../../images/partner1.png";
import partner2 from "../../images/partner2.png";
import partner3 from "../../images/partner3.png";
import partner4 from "../../images/partner4.png";
import partner5 from "../../images/partner5.png";
import partner6 from "../../images/partner6.png";
import partner7 from "../../images/partner7.png";
import partner8 from "../../images/partner8.png";
import partner9 from "../../images/partner9.png";
import styles from "./Partners.module.css";

let partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8,
  partner9,
];

const Partners = () => {
  return (
    <>
      {partners.map((partner, index) => (
        <div key={index} className={styles["partner-container"]}>
          <img src={partner} alt="partner" />
        </div>
      ))}
    </>
  );
};

export default Partners;
