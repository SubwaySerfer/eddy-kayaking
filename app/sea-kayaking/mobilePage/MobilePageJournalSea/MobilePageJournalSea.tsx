import styles from "./MobilePageJournalSea.module.scss";
import MobilePageJournalCardsSea from "./MobilePageJournalSeaCardsSea";

function MobilePageJournalSea() {
  return (
    <>
      <section className={styles.MobilePageseajournalsea}>
        <h3 className={styles.MobilePageseajournalsea__title}>WHAT TO READ?</h3>

        <div className={styles.MobilePageseajournalsea__content}>
          <p>
            We've put together a few helpful articles on sea kayaking just for
            you. We also interviewed our instructors, so you can get to know
            them even before your trip.
          </p>
        </div>
      </section>

      <div style={{ padding: "0 0 0 30px" }}>
        <MobilePageJournalCardsSea />
        <button className={styles.MobilePageseajournalsea__button}>
          <a href="/journal">See Journal</a>
        </button>
      </div>
    </>
  );
}

export default MobilePageJournalSea;
