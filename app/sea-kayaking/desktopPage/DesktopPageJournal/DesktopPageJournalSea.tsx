import styles from "./DesktopPageJournal.module.scss";
import DesktopPageJournalCardsSea from "./DesktopPageJournalCardsSea";

function DesktopPageJournalSea() {
  return (
    <>
      <section className={styles.desktoppageseajournalsea}>
        <h3 className={styles.desktoppageseajournalsea__title}>
          WHAT TO READ BEFORE THE TRIP?
        </h3>

        <div className={styles.desktoppageseajournalsea__content}>
          <p>
            We've put together a few helpful articles on sea kayaking just for
            you. We also interviewed our instructors, so you can get to know
            them even before your trip.
          </p>
        </div>
      </section>

      <div style={{ padding: "0 0 0 30px" }}>
        <DesktopPageJournalCardsSea />
        <button className={styles.desktoppageseajournalsea__button}>
          <a href="/journal">See Journal</a>
        </button>
      </div>
    </>
  );
}

export default DesktopPageJournalSea;
