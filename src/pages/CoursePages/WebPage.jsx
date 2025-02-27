import React, { useEffect, useContext, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseContent from "../../components/CourseContent";
import CourseContext from "../../context/CourseContext";
import coursePng from "../../images/coursePng1.png";

let webPageData = {
  topic: "Веб-разработчик для начинающих",
  description:
    "Курс 'Веб-разработчик с нуля' представляет собой интенсивную и практически ориентированную программу обучения, разработанную для тех, кто хочет освоить навыки веб-разработки с самых основ и создать себе успешную карьеру в сфере создания веб-сайтов и веб-приложений. Независимо от вашего уровня начальных знаний, этот курс обеспечит вас всеми инструментами, чтобы стать компетентным и востребованным веб-разработчиком.",
  img: coursePng,
  program: {
    duration: "26 недель 3 урока в неделях ",
    hours: "156 часов",
    format: "онлайн",
    sessionFormat: "живые лекции",
  },
  courseContent: [
    {
      id: 1,
      header: "1-4 неделя Принципы верстки",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 2,
      header: "5-8 неделя CSS, Flexbox, и Адаптивная Верстка - ключевые темы",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 3,
      header: "9-12 неделя Грамотно владеть техникой работы с макетами.",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 4,
      header: "13-16 неделя Овладеть программированием на JavaScript.",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 5,
      header: "17-20 неделя Продвинутая Работа с React и API",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 6,
      header: "20-26 неделя Изучение работы с базой данных MongoDB.",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
  ],
  coursePrice: {
    totalPrice: "480 000",
    forMonth: "80 000",
  },
  skills: [
    "HTML и CSS: Понимание основ разметки и стилей веб-страниц с использованием HTML для структурирования контента и CSS для оформления и стилизации.",
    "Верстка и дизайн: Умение создавать адаптивный и кроссбраузерный дизайн с помощью CSS и знание основных принципов веб-дизайна для создания пользовательских интерфейсов.",
    "JavaScript: Основы программирования на JavaScript, включая работу с переменными, условиями, циклами, функциями, объектами, массивами, событиями и DOM (Document Object Model).",
  ],
  goal: "Веб-разработчик для начинающих' заключается в том, чтобы обеспечить студентов всеми необходимыми знаниями, навыками и практическим опытом для успешной карьеры в области веб-разработки. Основной упор делается на том, чтобы подготовить студентов к созданию и поддержке современных веб-сайтов и веб-приложений, а также обеспечить их способностью адаптироваться к быстро меняющейся среде технологий.",
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
    speciality: "Веб-разработчик :",
    responsibility: "Обязанности Веб-разработчика :",
    responsibilityList: [
      "Владение фронтенд и бэкенд разработкой ;",
      "Управление проектом ;",
      "Тестирование ;",
    ],
    vacancyNumber: "1900+",
    salary: "300 000₸",
  },
};

const WebPage = () => {
  const { setCourseData } = useContext(CourseContext);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setCourseData(webPageData);
  }, [setCourseData]);

  return (
    <div>
      <Header onHeightChange={setHeaderHeight} />
      <CourseContent headerHeight={headerHeight} />
      <Footer />
    </div>
  );
};

export default WebPage;
