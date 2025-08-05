import React from 'react';
import './BuyNow.scss';

const BuyNow: React.FC = () => {
  return (
    <section className="buyNow">
      <button className="buyNow__button">Buy now</button>

      <h2 className="buyNow__title">
        For seven days, we’ll embark on a journey along Montenegro's coastline, paddling<br />
        in seat-in sea kayaks, where every day unveils new horizons.
      </h2>

      <div className="buyNow__content">
        <div className="buyNow__info">
          <div className="buyNow__infoItem">
            <p className="buyNow__label">ROUTE</p>
            <p>Ulcinj → Kotor</p>
          </div>
          <div className="buyNow__infoItem">
            <p className="buyNow__label">DURATION</p>
            <p>7 days</p>
          </div>
          <div className="buyNow__infoItem">
            <p className="buyNow__label">PRICE</p>
            <p>€ 1300</p>
          </div>
          <div className="buyNow__infoItem">
            <p className="buyNow__label">DIFFICULTY</p>
            <p>Hard</p>
          </div>
        </div>

        <div className="buyNow__description">
          <p>
            Crystal-clear waters of the Adriatic, wild coves, hidden caves, and secluded<br />
            beaches will be part of our route.
          </p>
          <p>
            At a relaxed pace, we’ll explore the coastline, stopping at scenic spots to<br />
            camp under the stars, and immerse ourselves in the local culture and cuisine.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuyNow;
