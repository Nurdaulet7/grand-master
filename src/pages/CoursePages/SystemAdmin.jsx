import React, { useEffect, useContext, useState } from "react";
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
  goal: "Цель курса по системному администрированию состоит в том, чтобы обеспечить студентам необходимые знания и навыки для успешной карьеры в области информационных технологий в качестве системных администраторов.Основная цель курса по системному администрированию заключается в подготовке квалифицированных специалистов, способных успешно управлять информационными системами и инфраструктурой организации, обеспечивая их надежность, безопасность и эффективность.",
  tasks: [
    "Обучение основам операционных систем",
    "Разъяснение сетевых технологий",
    "Изучение управления серверами ",
    "Освещение вопросов информационной безопасности",
    "Обучение управлению базами данных",
    "Введение в скриптование и автоматизацию",
    "Разработка навыков мониторинга и отладки",
    "Ознакомление с ITSM и ITIL",
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
      title: "Установка и конфигурация",
      text: "Установка и настройка операционных систем и программного обеспечения",
    },
    {
      title: "Обеспечение безопасности",
      text: "Мониторинг, обнаружение и предотвращение угроз безопасности",
    },
    {
      title: "Резервное копирование ",
      text: "Создание резервных копий данных и восстановление при необходимости",
    },
    {
      title: "Мониторинг и обслуживание",
      text: "Непрерывное отслеживание работы системы, выявление и устранение неисправностей",
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
    speciality: "Специалист Системный администратор:",
    responsibility: "Обязанности Системного администратора:",
    responsibilityList: [
      "Установка и настройка оборудования ; ",
      "Управление операционными системами ; ",
      "Техническая поддержка и консультирование ;",
    ],
    vacancyNumber: "2400+",
    salary: "350 000₸",
  },
};

const SystemAdmin = () => {
  const { setCourseData } = useContext(CourseContext);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    setCourseData(systemAdminPageData);
  }, [setCourseData]);

  return (
    <div>
      <Header onHeightChange={setHeaderHeight} />
      <CourseContent headerHeight={headerHeight} />
      <Footer />
    </div>
  );
};

export default SystemAdmin;
