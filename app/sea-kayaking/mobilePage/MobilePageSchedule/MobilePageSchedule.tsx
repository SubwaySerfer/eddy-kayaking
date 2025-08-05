import "./MobilePageSchedule.scss";
import "../MobilePageBuyNow/MobilePageBuyNow.scss";

const MobilePageSchedule = () => {
  return (
    <section className="MobilePageseaschedule">
      <div className="MobilePageseabuyNow__coastlineTitle">
        <p className="MobilePageseabuyNow__line">Here will be </p>
        <p className="MobilePageseabuyNow__line" style={{ padding: "0 51px" }}>
          <span className="MobilePageseabuyNow__outlined">
            the TOUR schedule
          </span>
        </p>
        <p className="MobilePageseabuyNow__line">and the route</p>
      </div>

      <div className="MobilePageseaschedule__comingSoon">
        <img src="/images/icons/schedulesoon.svg" alt="Coming Soon" />
      </div>

      <button className="MobilePageseaschedule__button">Select date</button>

      <div className="MobilePageseaschedule__equipment">
        <h4 className="MobilePageseaschedule__equipment-title">
          OUR EQUIPMENT
        </h4>
        <p className="MobilePageseaschedule__equipment-text">
          We paddle only modern seat-in sea kayaks, ensuring optimal comfort for
          long-distance journeys. Each kayak is equipped with dedicated storage
          compartments for personal belongings.
        </p>
      </div>
    </section>
  );
};

export default MobilePageSchedule;
