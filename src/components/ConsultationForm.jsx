import React from "react";
import cn from "classnames";
import styles from "./ConsultationForm.module.css";

const sendEmail = (e) => {
  e.preventDefault();
};

export const ConsultationForm = () => {
  return (
    <div className={styles["consultation-container"]}>
      <Form />
    </div>
  );
};

export const Form = ({ forCoursePage = false }) => {
  return (
    <div
      className={cn(
        styles["form-container"],
        forCoursePage ? styles["course-form"] : ""
      )}
    >
      <h1>{!forCoursePage ? "Получить консультацию" : "Заполните форму"}</h1>
      <form action="" onSubmit={sendEmail}>
        <input type="text" name="username" placeholder="Name" />
        <input type="text" name="number" placeholder="+7 777 777 7777" />
        <input type="text" name="Email" placeholder="Email" />
        <input type="submit" value={"Отправить"} />
      </form>
      <p>
        Отправляя заявку, вы принимаете условия публичного договора и даете
        согласие на обработку своих персональных данных в соответствии с
        политикой конфиденциальности.
      </p>
    </div>
  );
};
