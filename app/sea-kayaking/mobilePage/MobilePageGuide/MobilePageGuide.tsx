"use client";
import "./MobilePageGuide.scss";
import { useState } from "react";
import MobilePageQuestions from "../MobilePageQuestions/MobilePageQuestions";

const MobilePageGuide = ({ guides, intro, src, alt }: any) => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleText = (index: number) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <section className="MobilePageseaguide">
      <div className="MobilePageseaguide__wrapper">
        <div className="MobilePageseaguide__intro">
          <h3 className="MobilePageseaguide__title">WHO IS A GUIDE</h3>
        </div>
        <div className="MobilePageseaguide__text">{intro}</div>
      </div>

      <div className="MobilePageseaguide__wrapper">
        {guides.map((guide: any, index: number) => (
          <div className="MobilePageseaguide__card" key={guide.name}>
            <img src={guide.image} alt={guide.name} />
            <div className="MobilePageseaguide__cardWrapper">
              <h4 className="MobilePageseaguide__name">{guide.name}</h4>
              <div className="MobilePageseaguide__description">
                {expanded === index ? guide.text : guide.shortText}
              </div>
              <button
                className="MobilePageseaguide__readmore"
                onClick={() => toggleText(index)}
              >
                {expanded === index ? "read less" : "read more"}
              </button>
            </div>
          </div>
        ))}
      </div>

      <MobilePageQuestions />

      <div className="MobilePageseaguide__image">
        <img src={src} alt={alt} />
      </div>
    </section>
  );
};

export default MobilePageGuide;
