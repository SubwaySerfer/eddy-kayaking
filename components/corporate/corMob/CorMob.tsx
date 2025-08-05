"use client";
import React, { useState } from "react";
import styles from "./CorMob.module.scss";

const CorMob = () => {
  const [formData, setFormData] = useState({
    mail: "",
    phone: "",
    name: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsModalOpen(true); // показать модалку
    setFormData({ mail: "", phone: "", name: "" });
  };

  return (
    <section className={styles.corporateMob}>
      {isModalOpen && (
        <div className={styles.modalMob__overlayMob}>
          <div className={styles.modalMob}>
            <p className={styles.modalMob__textMob}>
              Thank you for reaching out! <br />
              We will get back to you shortly.
            </p>
            <button
              className={styles.modalMob__buttonMob}
              onClick={() => setIsModalOpen(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
      <h2 className={styles.corporateMob__titleMob}>CORPORATE ADVENTURES</h2>
      <div className={styles.corporateMob__wrapperMob}>
        <p className={styles.corporateMob__descriptionMob}>
          We can organize the best water adventure for your team: speed and
          endurance races, exploring wild beaches and bays with panoramic views,
          and a barbecue by the water.
          <br />
          Enter your contacts, and we'll get in touch.
        </p>

        <form className={styles.corporateMob__formMob} onSubmit={handleSubmit}>
          <div className={styles["custom-inputMob"]}>
            <label
              className={styles["custom-inputMob__labelMob"]}
              htmlFor="mail"
            >
              Your mail
            </label>
            <input
              className={styles["custom-inputMob__fieldMob"]}
              type="email"
              name="mail"
              id="mail"
              value={formData.mail}
              onChange={handleChange}
              placeholder="eddy@community.com"
              required
            />
          </div>

          <div className={styles["custom-inputMob"]}>
            <label
              className={styles["custom-inputMob__labelMob"]}
              htmlFor="phone"
            >
              Your telephone
            </label>
            <input
              className={styles["custom-inputMob__fieldMob"]}
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+38267777777"
              required
            />
          </div>

          <div className={styles["custom-inputMob"]}>
            <label
              className={styles["custom-inputMob__labelMob"]}
              htmlFor="name"
            >
              Your name
            </label>
            <input
              className={styles["custom-inputMob__fieldMob"]}
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Niko Grotik"
              required
            />
          </div>

          <button className={styles.corporateMob__buttonMob} type="submit">
            Send request
          </button>
        </form>
      </div>
    </section>
  );
};

export default CorMob;
