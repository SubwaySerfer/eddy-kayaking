import React from "react";
import "./MobilePageBuyNow.scss";

const MobilePageBuyNow: React.FC = () => {
  return (
    <section className="MobilePageseabuyNow">
      <button className="MobilePageseabuyNow__button">Buy now</button>
      <div className="MobilePageseabuyNow__coastlineTitle">
        <p className="MobilePageseabuyNow__line">WE’LL EXPLORE</p>
        <p className="MobilePageseabuyNow__line">
          <span className="MobilePageseabuyNow__outlined">
            THE MONTENEGRIN COASTLINE
          </span>
        </p>
        <p className="MobilePageseabuyNow__line">IN SEAT-IN KAYAKS</p>
      </div>
      <h2 className="MobilePageseabuyNow__title">
        For seven days, we’ll embark on a journey along Montenegro's coastline,
        paddling
        <br />
        in seat-in sea kayaks, where every day unveils new horizons.
      </h2>
      <div className="MobilePageseabuyNow__content">
        <div className="MobilePageseabuyNow__info">
          <div className="MobilePageseabuyNow__infoItem">
            <p className="MobilePageseabuyNow__label">ROUTE</p>
            <p>Ulcinj → Kotor</p>
          </div>
          <div className="MobilePageseabuyNow__infoItem">
            <p className="MobilePageseabuyNow__label">DURATION</p>
            <p>7 days</p>
          </div>
          <div className="MobilePageseabuyNow__infoItem">
            <p className="MobilePageseabuyNow__label">PRICE</p>
            <p>€ 1300</p>
          </div>
          <div className="MobilePageseabuyNow__infoItem">
            <p className="MobilePageseabuyNow__label">DIFFICULTY</p>
            <p>Hard</p>
          </div>
        </div>

        <div className="MobilePageseabuyNow__description">
          <p>
            Crystal-clear waters of the Adriatic, wild coves, hidden caves, and
            secluded
            <br />
            beaches will be part of our route.
          </p>
          <p>
            At a relaxed pace, we’ll explore the coastline, stopping at scenic
            spots to
            <br />
            camp under the stars, and immerse ourselves in the local culture and
            cuisine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobilePageBuyNow;
