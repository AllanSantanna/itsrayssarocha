import { useId, useRef, useState } from "react";
import { skills } from "../data.js";
import Icon from "./Icon.jsx";

export default function Methodology() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const id = useId();
  const active = skills[activeIndex];

  function onKeyDown(event, index) {
    let next;
    if (event.key === "ArrowRight") next = (index + 1) % skills.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + skills.length) % skills.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = skills.length - 1;
    if (next !== undefined) {
      event.preventDefault();
      setActiveIndex(next);
      tabRefs.current[next]?.focus();
    }
  }

  return (
    <section id="methodology" className="section methodology">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">THE WAY WE LEARN</span>
          <h2>
            Inglês que faz parte
            <br />
            da <em>sua vida.</em>
          </h2>
          <p>
            Quatro habilidades, um objetivo: se comunicar. Aulas interativas,
            com um material base e atividades adaptadas às suas necessidades.
          </p>
        </div>
        <div className="learning-workspace">
          <div
            className="skill-tabs"
            role="tablist"
            aria-label="Habilidades trabalhadas nas aulas"
            style={{
              "--skill-index": activeIndex,
              "--skill-column": activeIndex % 2,
              "--skill-row": Math.floor(activeIndex / 2),
            }}
          >
            {skills.map((skill, index) => (
              <button
                key={skill.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`${id}-tab-${skill.id}`}
                aria-controls={`${id}-panel-${skill.id}`}
                aria-selected={activeIndex === index}
                tabIndex={activeIndex === index ? 0 : -1}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                <Icon name={skill.icon} />
                <span>
                  {skill.name}
                  <small>{skill.label}</small>
                </span>
                <span className="tab-index" aria-hidden="true">
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>
          <div className="skill-panels">
            {skills.map((skill) => (
              <div
                key={skill.id}
                className={`skill-panel ${active.id === skill.id ? "is-active" : ""}`}
                role="tabpanel"
                id={`${id}-panel-${skill.id}`}
                aria-labelledby={`${id}-tab-${skill.id}`}
                aria-hidden={active.id !== skill.id}
                inert={active.id !== skill.id}
                tabIndex={active.id === skill.id ? 0 : -1}
              >
                <span className="panel-illustration" aria-hidden="true">
                  <Icon name={skill.icon} size={76} />
                  <span className="little-spark">✳</span>
                </span>
                <div>
                  <span className="eyebrow">LET’S PRACTICE</span>
                  <h3>{skill.title}</h3>
                  <p>{skill.text}</p>
                  <div className="practice-example">
                    <Icon name="spark" size={18} />
                    <span>{skill.example}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
