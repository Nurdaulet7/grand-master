import React, { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseContent from "../../components/CourseContent";
import CourseContext from "../../context/CourseContext";
import coursePng from "../../images/frontend.png";

let data = {
  topic: "Frond-end разработчик",
  description:
    "Курс по Front-end разработке предназначен для обучения созданию интерактивных и визуально привлекательных веб-страниц и приложений. Участники курса научатся использовать основные технологии веб-разработки, такие как HTML, CSS, и JavaScript, а также познакомятся с современными фреймворками и библиотеками, включая React, Angular или Vue.js.",
  img: coursePng,
  program: {
    duration: "26 недель 3 урока в неделях",
    hours: "156 часов",
    format: "онлайн",
    sessionFormat: "живые лекции",
  },
  courseContent: [
    {
      id: 1,
      header: "1-4 неделя Введение",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 2,
      header: "5-8 неделя Выполнение операций",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 3,
      header: "5-8 неделя Создание операторов",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 4,
      header: "13-16 неделя Работа с данными",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 5,
      header: "17-20 неделя Создание классов",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 6,
      header: "20-26 неделя Развертывание программ",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
  ],
  coursePrice: {
    totalPrice: "480 000",
    forMonth: "80 000",
  },
  skills: [
    "Понимание синтаксиса и основных концепций языка Java",
    "Умение манипулировать данными, используя массивы, списки и другие структуры данных.",
    "Создание многопоточных приложений для оптимизации производительности",
    "Создание, управление и оптимизация баз данных с использованием SQL и JDBC",
  ],
  goal: "'Веб-разработчик для начинающих' заключается в том, чтобы обеспечить студентов всеми необходимыми знаниями, навыками и практическим опытом для успешной карьеры в области веб-разработки. Основной упор делается на том, чтобы подготовить студентов к созданию и поддержке современных веб-сайтов и веб-приложений, а также обеспечить их способностью адаптироваться к быстро меняющейся среде технологий.",
  tasks: [
    "Овладение основами веб-технологий",
    "Создание статической веб-страницы",
    "Добавление интерактивности с помощью JavaScript",
    "Создание адаптивного  дизайна",
    "Использование библиотек  и фреймворков",
    "Работа с базами данных",
    "Верстка по макету",
    "Разработка проекта от  начала до конца",
  ],
  criterias: [
    {
      title: "Знание",
      text: "Понимание синтаксиса языка, структур данных  и основных библиотек.",
    },
    {
      title: "Опыт программирования",
      text: "Опыт работы с другими языками программирования может быть полезным.",
    },
    {
      title: "Решение задач",
      text: "Умение анализировать задачи и применять алгоритмы  и структуры данных для их решения.",
    },
    {
      title: "Мотивация и интерес",
      text: "Желание учиться и развиваться в этой области.",
    },
    {
      title: "Базовые знания английского языка",
      text: "Многие ресурсы и документация по С++ доступны на английском языке.",
    },
    {
      title: "Возрастное ограничение",
      text: "Возрастное ограничение от 18 до 45 лет",
    },
  ],
  workTypes: [
    {
      title: "Верстка (HTML/CSS)",
      text: "Создание структуры и внешнего вида веб-страниц",
    },
    {
      title: "Верстка (HTML/CSS)",
      text: "Создание структуры и внешнего вида веб-страниц",
    },
    {
      title: "Верстка (HTML/CSS)",
      text: "Создание структуры и внешнего вида веб-страниц",
    },
    {
      title: "Верстка (HTML/CSS)",
      text: "Создание структуры и внешнего вида веб-страниц",
    },
  ],
  courseLearnings: [
    {
      title: "Понимать принципы работы БД",
      text: "Разберётесь в теории: изучите принципы, которые обеспечивают высокую производительность и надёжность хранения данных.",
    },
    {
      title: "Подбирать базы данных под  конкретную задачу",
      text: "Разберётесь в теории: изучите принципы, которые  обеспечивают высокую производительность и  надёжность хранения данных.",
    },
    {
      title: "Использовать различные БД",
      text: "Научитесь работать с базами SQL (MySQL, PostgreSQL,  Oracle, MS SQL) и NoSQL (Redis, MongoDB),  использовать уникальные возможности каждой из баз.",
    },
    {
      title: "Использовать язык SQL",
      text: "Научитесь применять язык запросов к базам  данных, чтобы получать, создавать и менять  данные.",
    },
    {
      title: "Проектировать и оптимизировать БД",
      text: "Сможете добиваться высокой производительности  приложений при работе с БД.",
    },
  ],
  speciality_infos: {
    speciality: "Специалист Java-разработчик:",
    responsibility: "Обязанности Java-разработчик с нуля:",
    responsibilityList: [
      "Разработка и дизайн приложений ;",
      "Тестирование и отладка ;",
      "Управление базами данных ;",
      "Постоянное обучение ; ",
    ],
    vacancyNumber: "1900+",
    salary: "300 000₸",
  },
};

const FrontendPage = () => {
  const { setCourseData } = useContext(CourseContext);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setCourseData(data);
  }, [setCourseData]);

  return (
    <div>
      <Header onHeightChange={setHeaderHeight} />
      <CourseContent headerHeight={headerHeight} />
      <Footer />
    </div>
  );
};

export default FrontendPage;
