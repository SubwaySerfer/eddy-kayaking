"use client";
import React from "react";
import styles from "./NavCards.module.scss";
import Link from "next/link";

const NavCards = () => {
  return (
    <section className={styles["nav-cards"]}>
      <ul className={styles["nav-cards__list"]}>
        <li className={styles["nav-cards__item"]}>
          <Link href="/adventures" legacyBehavior passHref>
            <a
              className={`${styles["card-square"]} ${styles["card-square--tours"]}`}
            >
              <div className={styles["card-square__inner"]}>
                <h3 className={styles["card-square__title"]}>Regular Tours</h3>
                <p className={styles["card-square__desc"]}>
                  Budva Riviera and Skadar Lake National Park
                </p>
                <div className={styles["card-square__go-to"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM20 9.80371L20.0215 9.8252L20 9.8457V18H17.4189V12.4268L9.50195 20.3438L7.67773 18.5195L15.6152 10.5811H10V8H20V9.80371Z" fill="white" />
                  </svg>
                </div>
              </div>
            </a>
          </Link>
        </li>

        <li className={styles["nav-cards__item"]}>
          <Link href="/market" legacyBehavior passHref>
            <a
              className={`${styles["card-square"]} ${styles["card-square--market"]}`}
            >
              <div className={styles["card-square__inner"]}>
                <h3 className={styles["card-square__title"]}>Market</h3>
                <p className={styles["card-square__desc"]}>
                  Rent kayaks and equipment for your own adventure
                </p>
                <div className={styles["card-square__go-to"]}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0ZM14 2C7.37258 2 2 7.37258 2 14C2 20.6274 7.37258 26 14 26C20.6274 26 26 20.6274 26 14C26 7.37258 20.6274 2 14 2ZM20 9.80371L20.0215 9.8252L20 9.8457V18H17.4189V12.4268L9.50195 20.3438L7.67773 18.5195L15.6152 10.5811H10V8H20V9.80371Z" fill="white" />
                  </svg>
                </div>
              </div>
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default NavCards;
