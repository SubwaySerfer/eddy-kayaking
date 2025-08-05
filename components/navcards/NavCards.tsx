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
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83337 14H22.1667M22.1667 14L14 5.83334M22.1667 14L14 22.1667"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.83337 14H22.1667M22.1667 14L14 5.83334M22.1667 14L14 22.1667"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
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
