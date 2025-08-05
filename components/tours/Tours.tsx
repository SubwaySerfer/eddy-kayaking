"use client";
import styles from "./Tours.module.scss";
import Link from "next/link";

const Tours = () => {
  return (
    <section className={styles.tours}>
      {/* <div className="container container--big"> */}
      <div className={styles.tours__wrapper}>
        <Link href="/adventures" style={{ width: "100vw" }}>
          <h2 className={styles.tours__title}>Regular Water Adventures</h2>
        </Link>
        <ul className={styles.tours__list}>
          <Link href={"/adventures/sveti-nikola"}>
            <li className={styles.tours__item}>
              <a
                className={`${styles.tourCard} ${styles.tourCardSvNikola}`}
                href="#"
              >
                <h3 className={styles.tourCard__title}>Sveti Nikola Island</h3>
                <p className={styles.tourCard__description}>
                  Explore Sveti Nikola Island with a hidden grotto, wild beach
                  snorkeling, and an optional summit hike for stunning sea
                  views.
                </p>
              </a>
            </li>
          </Link>
          <Link href={"/adventures/kamenik"}>
            <li className={styles.tours__item}>
              <a
                className={`${styles.tourCard} ${styles.tourCardKamenik}`}
                href="#"
              >
                <h3 className={styles.tourCard__title}>KAMENIK ISLE</h3>
                <p className={styles.tourCard__description}>
                  Four-hour tour on the waters of the Skadar Lake National
                  Reserve.
                </p>
              </a>
            </li>
          </Link>
          <Link href={"/adventures/vranjina"}>
            <li className={styles.tours__item}>
              <a
                className={`${styles.tourCard} ${styles.tourCardMoraca}`}
                href="#"
              >
                <h3 className={styles.tourCard__title}>VRANJINA ISLAND</h3>
                <p className={styles.tourCard__description}>
                  Four-hour guided tour around Vranjina Island with access to
                  Skadar Lake.
                </p>
              </a>
            </li>
          </Link>
          <Link href={"/adventures/pigeon-cave"}>
            <li className={styles.tours__item}>
              <a
                className={`${styles.tourCard} ${styles.tourCardCaves}`}
                href="#"
              >
                <h3 className={styles.tourCard__title}>PIGEON CAVE</h3>
                <p className={styles.tourCard__description}>
                  Three-hour tour to the coastal caves of the Budva Riviera.
                  We'll see Budva's Old Town and dive from the cliffs.
                </p>
              </a>
            </li>
          </Link>
        </ul>
        <Link href="/adventures">
          <button
            className={`btn btn--blue ${styles.tours__button}`}
            type="button"
          >
            All Adventures
          </button>
        </Link>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Tours;
