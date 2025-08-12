import React from "react";
import Link from "next/link";
import Image from "next/image";
import "./RentalHome.scss";

const Rental = () => {
  return (
    <section className="home-rental container">
      <div className="home-container">
        <div className="home-rental__wrapper">
          <h2 className="home-rental__title visually-hidden">Rental</h2>
          <Link href="/Rentals" className="home-rental__logo">
            <Image
              src="/images/icons/Rental.svg"
              alt="Rental Logo"
              width={400}
              height={137}
            />
          </Link>

          <ul className="home-rental__list">
            <li>
              <Link href="/Rentals" className="home-rental-card-item">
                <div className="home-rental-card-item__img">
                  <Image
                    src="/images/rental/kayak_orca-base.png"
                    alt="double kayaks"
                    width={380}
                    height={190}
                    className="home-rental-card-item__image"
                  />
                </div>
                <h3 className="home-rental-card-item__title pt-top">double kayaks</h3>
              </Link>
            </li>
            <li>
              <Link href="/Rentals" className="home-rental-card-item">
                <div className="home-rental-card-item__img">
                  <Image
                    src="/images/rental/kayak_mid-way.png"
                    alt="Single kayaks"
                    width={380}
                    height={190}
                    className="home-rental-card-item__image"
                  />
                </div>
                <h3 className="home-rental-card-item__title">Single kayaks</h3>
              </Link>
            </li>
            <li>
              <Link href="/Rentals" className="home-rental-card-item">
                <div className="home-rental-card-item__img">
                  <Image
                    src="/images/rental/board-gladiatorPro10'6.png"
                    alt="paddle boards"
                    width={380}
                    height={190}
                    className="home-rental-card-item__image"
                  />
                </div>
                <h3 className="home-rental-card-item__title pt-top">paddle boards</h3>
              </Link>
            </li>
          </ul>
          <Link href="/Rentals" className="home-rental__link">
            <button
              className="home-btn home-btn--rental home-rental__btn"
              type="button"
            >
              See All Options
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Rental;
