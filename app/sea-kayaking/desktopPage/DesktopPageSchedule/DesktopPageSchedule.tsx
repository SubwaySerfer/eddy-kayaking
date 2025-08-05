import React from "react";
import "./DesktopPageSchedule.scss";

const DesktopPageSchedule = () => {
  return (
    <section className="desktoppageseaschedule">
      <h3 className="desktoppageseaschedule__title">
        HERE WILL BE THE TOUR SCHEDULE AND THE ROUTE
      </h3>

      <div className="desktoppageseaschedule__comingSoon">
        <img src="/images/main/coming-soon.svg" alt="Coming Soon" />
      </div>

      <button className="desktoppageseaschedule__button">Select date</button>

      <div className="desktoppageseaschedule__equipment">
        <h4 className="desktoppageseaschedule__equipment-title">
          OUR EQUIPMENT
        </h4>
        <p className="desktoppageseaschedule__equipment-text">
          We paddle only modern seat-in sea kayaks, ensuring optimal comfort for
          long-distance journeys. Each kayak is equipped with dedicated storage
          compartments for personal belongings.
        </p>
      </div>
    </section>
  );
};

export default DesktopPageSchedule;
