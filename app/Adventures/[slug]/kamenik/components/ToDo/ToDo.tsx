import React from "react";
import "./ToDo.scss";

const ToDo = () => {
  return (
    <section className="toDo">
      <div className="toDo__text">
        <h3 className="toDo__title">WHAT WE'LL DO</h3>
        <ul className="toDo__list">
          <li>
            We’ll explore rugged coastlines, hidden caves, quiet lagoons, and
            wild beaches—places only accessible by kayak.
          </li>
          <li>
            Traveling in a small group, we’ll move at our own pace, sharing
            moments with new friends along the way.
          </li>
          <li>
            Over the course of the adventure, we’ll spend up to 30 hours on the
            water—plenty of time to master paddling techniques and enjoy
            unhurried stops in stunning locations.
          </li>
          <li>
            We’ll set up camp in secluded bays and experience the true rhythm of
            the Adriatic.
          </li>
        </ul>
      </div>

      <div className="sea__image">
        <img
          src="/images/sea/00392e9815286dd36be0a1a72bfe3da38900db3a.jpg"
          alt="Kayaking adventure"
        />
      </div>
    </section>
  );
};

export default ToDo;
