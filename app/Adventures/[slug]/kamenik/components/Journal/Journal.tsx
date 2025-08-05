import JournalCards from "@/components/journal/JournalCards";
import "../Questions/Questions.scss";

function Journal() {
  return (
    <>
      <section className="questions">
        <h3 className="questions__title" style={{ width: "22rem" }}>
          WHAT TO READ BEFORE THE TRIP?
        </h3>

        <div className="questions__content">
          <p>
            We've put together a few helpful articles on sea kayaking just for
            you. We also interviewed our instructors, so you can get to know
            them even before your trip.
          </p>
        </div>
      </section>
      <div style={{ padding: "0 3.75rem" }}>
        <JournalCards />
        <button className="schedule__button">
          <a href="/journal">See Journal</a>
        </button>
      </div>
    </>
  );
}

export default Journal;
