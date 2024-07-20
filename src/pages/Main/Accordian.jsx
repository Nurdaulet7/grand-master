import { useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import "./AccordionStyles.css";

const faqs = [
  {
    id: 1,
    header: "01. Сколько длится курс обучения программированию?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit laudantium voluptatum fugiat hic aliquam sapiente dolorum ipsum error distinctio perspiciatis reprehenderit eveniet praesentium, earum ipsa, consequatur nostrum ratione. Perferendis!",
  },
  {
    id: 2,
    header: "02. Сколько стоит курс?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit laudantium voluptatum fugiat hic aliquam sapiente dolorum ipsum error distinctio perspiciatis reprehenderit eveniet praesentium, earum ipsa, consequatur nostrum ratione. Perferendis!",
  },
  {
    id: 3,
    header: "03. Сколько человек в группе?",
    text: `You can search for products by entering the product name, category, or Halal status in the search bar. Filters are also available to refine your search results based on certification status and other criteria.`,
  },
  {
    id: 4,
    header: "04. Как часто происходит набор группы?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit laudantium voluptatum fugiat hic aliquam sapiente dolorum ipsum error distinctio perspiciatis reprehenderit eveniet praesentium, earum ipsa, consequatur nostrum ratione. Perferendis!",
  },
  {
    id: 5,
    header: "05. В какое время проходят занятия?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit laudantium voluptatum fugiat hic aliquam sapiente dolorum ipsum error distinctio perspiciatis reprehenderit eveniet praesentium, earum ipsa, consequatur nostrum ratione. Perferendis!",
  },
  {
    id: 6,
    header: "06. Какую помощь в трудоустройстве вы оказываете?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit odit laudantium voluptatum fugiat hic aliquam sapiente dolorum ipsum error distinctio perspiciatis reprehenderit eveniet praesentium, earum ipsa, consequatur nostrum ratione. Perferendis!",
  },
  {
    id: 7,
    header:
      "07. Вы обучаете программированию только с нуля или есть курсы для продвинутого уровня?",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quo reiciendis nostrum nemo doloremque consectetur, necessitatibus minus harum delectus aut cupiditate ut, ad ex voluptas perspiciatis dicta, omnis repellat totam! Ratione facere laudantium earum optio ipsam eos autem tempore asperiores, omnis hic labore pariatur qui consectetur numquam quas inventore saepe!",
  },
];

const AccordionItem = ({
  handleToggle,
  active,
  faq,
  forCoursePage = false,
}) => {
  const contentEl = useRef(null);
  const { header, id, text } = faq;

  return (
    <div
      className={`${"rc-accordion-card"} ${
        forCoursePage ? "not-upper-case-text" : ""
      }`}
    >
      <header
        className={active === id ? "active" : ""}
        onClick={() => handleToggle(id)}
      >
        <h2>{header}</h2>
        <span className="material-symbols-outlined">
          <IoIosArrowDown id="arrowDown" />
        </span>
      </header>
      <div
        ref={contentEl}
        className={`collapse ${active === id ? "show" : ""}`}
        style={
          active === id
            ? { height: contentEl.current?.scrollHeight + "px" }
            : { height: "0px" }
        }
      >
        <p>{text}</p>
      </div>
    </div>
  );
};

const Accordion = ({ forCoursePage = false, data = [] }) => {
  const [active, setActive] = useState(null);

  const handleToggle = (id) => {
    setActive(active === id ? null : id);
  };

  // Используем данные из props или дефолтные данные
  const accordionData = data.length > 0 ? data : faqs;

  return (
    <article>
      {accordionData.map((faq) => (
        <AccordionItem
          key={faq.id}
          active={active}
          handleToggle={handleToggle}
          faq={faq}
          forCoursePage={forCoursePage}
        />
      ))}
    </article>
  );
};

export default Accordion;
