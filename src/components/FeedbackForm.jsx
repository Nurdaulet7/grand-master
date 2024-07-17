import React from "react";
import styles from "./FeedbackForm.module.css";

const sendEmail = (e) => {
  e.preventDefault();
};

const FeedbackForm = () => {
  return (
    <div className={styles["feedback-container"]}>
      <div className={styles["feedback"]}>
        <div className={styles["links"]}>
          <div className={styles["course-links"]}>
            <a href="/">Веб-разработчик с нуля</a>
            <a href="/">Системный администратор</a>
            <a href="/">Front-end разработчик</a>
            <a href="/">Java-разработчик с нуля</a>
            <a href="/">Python-разработчик</a>
          </div>
          <div className={styles["contacts"]}>
            <a href="/">Наша команда</a>
            <a href="/">Реквизиты</a>
            <a href="/">Контакты</a>
          </div>
        </div>
        <form action="" onSubmit={sendEmail}>
          <label>Оставьте отзыв</label>
          <div className={styles["form-center"]}>
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="E-mail адрес" />
          </div>
          <textarea
            name="message"
            defaultValue="Сообщение..."
            rows={4}
            cols={40}
          />
          <input type="submit" value={"Отправить"} />
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;
