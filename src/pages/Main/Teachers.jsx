import React from "react";
import teacher1 from "../../images/teacher1.png";
import teacher2 from "../../images/teacher2.png";
import teacher3 from "../../images/teacher3.png";
import InfoCard from "../../components/InfoCard";

let teachers = [
  {
    img: teacher1,
    text: "Бектурова Эльмира",
    role: "Преподаватель по курсу",
  },
  {
    img: teacher2,
    text: "Ақберген Қарақат",
    role: "Преподаватель по курсу",
  },
  {
    img: teacher3,
    text: "Жетпісбаев Серік",
    role: "Преподаватель по курсу ",
  },
];

const Teachers = () => {
  return <InfoCard data={teachers} additionalProperty={true} />;
};

export default Teachers;
