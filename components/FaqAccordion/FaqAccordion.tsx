"use client";
import React, { useState } from "react";
import "./FaqAccordion.scss";
import { useWindowSize } from "react-use";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

const FaqAccordion: React.FC<FaqAccordionProps> = ({ items }) => {
  const { width } = useWindowSize();
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="faqAccordion">
      {width < 426 ? (
        <h2 className="faqAccordion__titleSmall">FAQ</h2>
      ) : (
        <h2 className="faqAccordion__title">Frequently Asked Questions</h2>
      )}

      <ul className="faqAccordion__list">
        {items.map((item, index) => {
          const isOpen = openIndexes.includes(index);
          return (
            <li
              key={index}
              className={`faqAccordion__item ${isOpen ? "open" : "closed"}`}
            >
              <button
                className="faqAccordion__question"
                onClick={() => toggle(index)}
              >
                {item.question}
                <span className="faqAccordion__icon">
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <circle
                        cx="17"
                        cy="17"
                        r="16"
                        transform="rotate(-90 17 17)"
                        stroke="#1A1A1A"
                        strokeWidth="2"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.6525 21.6517L16.3008 22.2435L17.1297 23L25.984 14.9188L24.5068 13.5706L17.1297 20.3035L9.47722 13.319L8 14.6673L15.6525 21.6517Z"
                        fill="#1A1A1A"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="34"
                      height="34"
                      viewBox="0 0 34 34"
                      fill="none"
                    >
                      <circle
                        cx="17"
                        cy="17"
                        r="16"
                        transform="matrix(0 1 1 0 0 0)"
                        stroke="#1A1A1A"
                        strokeWidth="2"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.6525 12.3483L16.3008 11.7565L17.1297 11L25.984 19.0812L24.5068 20.4294L17.1297 13.6965L9.47722 20.681L8 19.3327L15.6525 12.3483Z"
                        fill="#1A1A1A"
                      />
                    </svg>
                  )}
                </span>
              </button>
              {isOpen && (
                <div className="faqAccordion__answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default FaqAccordion;
