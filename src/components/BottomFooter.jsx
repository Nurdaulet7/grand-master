import React from "react";
import styles from "./BottomFooter.module.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

const BottomFooter = () => {
  return (
    <div className={styles["bottom-container"]}>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <p>Контакты</p>
          <p>+7 (778) 735-30-10</p>
        </div>
        <div className={styles.mail}>
          <p>Email</p>
          <p>info@metaschool.kz</p>
        </div>
        <div className={styles.social_medias}>
          <div className={styles.icons}>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaWhatsapp />
            </a>
            <a href="/">
              <FaYoutube />
            </a>
            <a href="/">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
