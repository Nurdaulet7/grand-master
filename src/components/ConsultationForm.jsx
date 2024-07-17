import React from "react";
import styles from "./ConsultationForm.module.css";

const sendEmail = (e) => {
  e.preventDefault();
};

const ConsultationForm = () => {
  return (
    <div className={styles["consultation-container"]}>
      <div className={styles["form-container"]}>
        <h1>Получить консультацию</h1>
        <form action="" onSubmit={sendEmail}>
          <input type="text" name="username" placeholder="Name" />
          <input type="text" name="number" placeholder="+7 777 777 7777" />
          <input type="text" name="Email" placeholder="Email" />
          <input type="submit" value={"Отправить"} />
        </form>
        <p>
          Отправляя заявку,  вы принимаете условия публичного договора и даете
          согласие на обработку своих персональных данных в соответствии с
          политикой конфиденциальности.
        </p>
      </div>
    </div>
  );
};

export default ConsultationForm;
