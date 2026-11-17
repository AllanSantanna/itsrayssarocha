import { useId, useState } from "react";
import { faqs } from "../data.js";
import Icon from "./Icon.jsx";

export default function Faq() {
  const [openId, setOpenId] = useState(faqs[0].id);
  const id = useId();

  return (
    <section
      id="faq"
      className="section faq-section"
      aria-labelledby={`${id}-heading`}
    >
      <div className="container faq-grid">
        <div className="faq-heading">
          <span className="eyebrow">GOOD TO KNOW</span>
          <h2 id={`${id}-heading`}>
            Perguntas
            <br />
            <em>frequentes.</em>
          </h2>
          <p>Veja os detalhes sobre contratos, aulas e pagamentos.</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => {
            const open = openId === faq.id;
            const questionId = `${id}-question-${faq.id}`;
            const answerId = `${id}-answer-${faq.id}`;

            return (
              <article
                className={`faq-item ${open ? "is-open" : ""}`}
                key={faq.id}
              >
                <h3>
                  <button
                    id={questionId}
                    className="faq-trigger"
                    type="button"
                    aria-expanded={open}
                    aria-controls={answerId}
                    onClick={() =>
                      setOpenId((current) =>
                        current === faq.id ? null : faq.id,
                      )
                    }
                  >
                    <span>{faq.question}</span>
                    <span className="faq-toggle">
                      <Icon name="plus" size={18} />
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-answer-wrapper"
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!open}
                  inert={!open}
                >
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
