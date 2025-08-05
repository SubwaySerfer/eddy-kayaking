import React from "react";
import "./DesktopPageGuide.scss";
import DesktopPageQuestions from "../DesktopPageQuestions/DesktopPageQuestions";

const DesktopPageGuide = ({ guides, intro, src, alt }: any) => {
  return (
    <section className="desktopPageseaguide">
      <div className="desktopPageseaguide__wrapper">
        <div className="desktopPageseaguide__intro">
          <h3 className="desktopPageseaguide__title">WHO IS A GUIDE</h3>
        </div>
        <div className="desktopPageseaguide__intro">{intro}</div>
      </div>

      <div className="desktopPageseaguide__wrapper">
        {guides.map((guide: any) => (
          <div className="desktopPageseaguide__card" key={guide.name}>
            <img src={guide.image} alt={guide.name} />
            <div className="desktopPageseaguide__cardWrapper">
              <h4 className="desktopPageseaguide__name">{guide.name}</h4>
              <p>{guide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <DesktopPageQuestions />
      <div className="desktopPageseaguide__image">
        <img src={src} alt={alt} />
      </div>
    </section>
  );
};

export default DesktopPageGuide;
