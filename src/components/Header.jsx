import React, { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import logo from "../images/logo-grand-park.png";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaTelegramPlane,
} from "react-icons/fa";

function Header({ hasbutton = false, onHeightChange }) {
  const headerRef = useRef(null);

  useEffect(() => {
    if (headerRef.current && onHeightChange) {
      onHeightChange(headerRef.current.offsetHeight);
    }
  }, [onHeightChange]);

  return (
    <div className={styles.header} ref={headerRef}>
      <div className={styles.topHeader}>
        <div className={styles["top-header-row"]}>
          <div className={styles.mail}>
            <div className={styles["mail-row"]}>
              <div className={styles.email}>
                <span>
                  <IoMailOutline />
                </span>
                <p>info@metaschool.kz</p>
              </div>
              <div className={styles.email}>
                <span>
                  <IoCallOutline />
                </span>
                <p>+7 (778) 735-30-10</p>
              </div>
              {/* <p>+7 (778) 735-30-10</p> */}
            </div>
          </div>
          <div className={styles.social_medias}>
            <div className={styles.icons}>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <FaWhatsapp />
              </a>
              <a href="">
                <FaYoutube />
              </a>
              <a href="">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomHeader}>
        <div className={styles.bottomHeader_logo}>
          <div className={styles.bottomHeader_logo_link}>
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
            <p>Meta school</p>
          </div>
          {!hasbutton && <button>Получить консультацию</button>}
        </div>
      </div>
    </div>
  );
}

export default Header;
