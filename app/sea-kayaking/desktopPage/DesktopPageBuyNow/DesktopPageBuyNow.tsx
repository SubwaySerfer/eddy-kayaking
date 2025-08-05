import React from "react";
import "./DesktopPageBuyNow.scss";

const DesktopPageBuyNow: React.FC = () => {
  return (
    <section className="desktopPageseabuyNow">
      <h2 className="desktopPageseabuyNow__title">
        For seven days, we’ll embark on a journey along Montenegro's coastline,
        paddling
        <br />
        in seat-in sea kayaks, where every day unveils new horizons.
      </h2>
      <button className="desktopPageseabuyNow__button">Buy now</button>
      <div className="desktopPageseabuyNow__content">
        <div className="desktopPageseabuyNow__info">
          <div className="desktopPageseabuyNow__infoItem">
            <p className="desktopPageseabuyNow__label">ROUTE</p>
            <p>Ulcinj → Kotor</p>
          </div>
          <div className="desktopPageseabuyNow__infoItem">
            <p className="desktopPageseabuyNow__label">DURATION</p>
            <p>7 days</p>
          </div>
          <div className="desktopPageseabuyNow__infoItem">
            <p className="desktopPageseabuyNow__label">PRICE</p>
            <p>€ 1300</p>
          </div>
          <div className="desktopPageseabuyNow__infoItem">
            <p className="desktopPageseabuyNow__label">DIFFICULTY</p>
            <p>Hard</p>
          </div>
        </div>

        <div className="desktopPageseabuyNow__description">
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

export default DesktopPageBuyNow;
