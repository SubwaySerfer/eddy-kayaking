import React from "react";
import Image from "next/image";
import styles from "./Journal.module.scss";
import JournalCards from "./JournalCards";
import Link from "next/link";

const Journal = () => {
  return (
    <section className={styles.journal}>
      <div className={styles.journal__wrapper}>
        <h2 className="visually-hidden">Journal</h2>
        <Link href="/Journal">
          <Image
            src="/images/icons/journal.svg"
            alt="Journal"
            width={414}
            height={138}
            className={styles.journal__title_icon}
          />
        </Link>
        <JournalCards />
        <Link href="/Journal">
          <button className={styles["journal-button"]} type="button">
            <a href="/journal">All Articles</a>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Journal;
