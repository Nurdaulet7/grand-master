import React, { useEffect, useContext } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CourseContent from "../../components/CourseContent";
import CourseContext from "../../context/CourseContext";
import coursePng from "../../images/coursePng3.png";

let systemAdminPageData = {
  topic: "Системный администратор",
  description:
    "Курс системного администратора предназначен для обучения участников ключевым навыкам и концепциям, необходимым для эффективного управления и поддержки информационных систем. Курс охватывает широкий спектр тем, включая основы операционных систем, сетевые технологии, управление серверами, информационную безопасность, управление базами данных, скриптование и автоматизацию, а также мониторинг и отладку. Этот курс идеально подходит для тех, кто стремится стать системным администратором или для тех, кто уже работает в области IT и хочет улучшить свои навыки и знания.",
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
      header: "1-4 неделя Введение в системное администрирование",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 2,
      header: "5-8 неделя Работа с операционными системами",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 3,
      header: "9-12 неделя Автоматизация задач системного администратора",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 4,
      header: "13-16 неделя Сетевые технологии и безопасность",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 5,
      header: "17-20 неделя Мониторинг и логирование",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
    {
      id: 6,
      header: "20-26 неделя Разработка и поддержка инфраструктуры",
      text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam molestiae laudantium illo ipsa dolorum earum molestias amet placeat quidem error.",
    },
  ],
  coursePrice: {
    totalPrice: "480 000",
    forMonth: "80 000",
  },
  skills: [
    "Умение настраивать различные операционные системы",
    "Настраивать и поддерживать сетевые подключения и оборудование.",
    "Понимание принципов безопасности информации и способность настраивать механизмы защиты, чтобы обеспечить безопасность системы.",
    "Готовность к постоянному профессиональному развитию и обновлению знаний в сфере информационных технологий.",
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
    "Понимание синтаксиса языка, структур данных  и основных библиотек.",
    "Опыт работы с другими языками программирования может быть полезным.",
    "Умение анализировать задачи и применять алгоритмы  и структуры данных для их решения.",
    "Желание учиться и развиваться в этой области.",
    "Многие ресурсы и документация по С++ доступны на английском языке.",
    "Возрастное ограничение от 18 до 45 лет",
  ],
};

const SystemAdmin = () => {
  const { setCourseData } = useContext(CourseContext);

  useEffect(() => {
    setCourseData(systemAdminPageData);
  }, [setCourseData]);

  return (
    <div>
      <Header />
      <CourseContent />
      <Footer />
    </div>
  );
};

export default SystemAdmin;
