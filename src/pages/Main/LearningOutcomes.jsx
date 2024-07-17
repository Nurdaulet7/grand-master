import React from "react";
import skill1 from "../../images/skill1.png";
import skill2 from "../../images/skill2.png";
import skill3 from "../../images/skill3.png";
import skill4 from "../../images/skill4.png";
import skill5 from "../../images/skill5.png";
import skill6 from "../../images/skill6.png";
import skill7 from "../../images/skill7.png";
import skill8 from "../../images/skill8.png";
import InfoCard from "../../components/InfoCard";

let skills = [
  {
    img: skill1,
    text: "Основам языков программирования: Структурам данных, циклам, условным операторам и т.д",
  },
  {
    img: skill2,
    text: " (Integrated Development Environment): Узнаете, как создавать, тестировать и отлаживать код",
  },
  {
    img: skill3,
    text: "Разработке алгоритмов: Решение задач, анализ и оптимизация алгоритмов",
  },
  {
    img: skill4,
    text: "Работе с базами данных: SQL, NoSQL",
  },
  {
    img: skill5,
    text: "Разработке веб-приложений: Фреймворки, HTML/CSS, JavaScript",
  },
  {
    img: skill6,
    text: "Работе с системами контроля версий: Git",
  },
  {
    img: skill7,
    text: "Объектно-ориентированному программированию: Классы, наследование, полиморфизм и т.д",
  },
  {
    img: skill8,
    text: "Практическим проектам, что поможет закрепить полученные навыки и создать портфолио для будущей карьеры",
  },
];

const LearningOutcomes = () => {
  return <InfoCard data={skills} />;
};

export default LearningOutcomes;
