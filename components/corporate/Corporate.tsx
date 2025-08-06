"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Corporate.module.scss";
import CorMob from "./corMob/CorMob";
import { useWindowSize } from "react-use";

const Corporate = () => {
  const { width } = useWindowSize();
  const [formData, setFormData] = useState({
    mail: "",
    phone: "",
    name: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      setIsMobile(width <= 768);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

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
    <section className={styles.corporate}>
      {isMobile ? (
        <CorMob />
      ) : (
        <>
          {isModalOpen && (
            <div className={styles.modal__overlay}>
              <div className={styles.modal}>
                <p className={styles.modal__text}>
                  Thank you for reaching out! <br />
                  We will get back to you shortly.
                </p>
                <button
                  className={styles.modal__button}
                  onClick={() => setIsModalOpen(false)}
                >
                  OK
                </button>
              </div>
            </div>
          )}
          <div className={styles.corporate__wrapper}>
            <h2 className={`${styles.corporate__title} container`}>CORPORATE ADVENTURES</h2>
            <p className={`${styles.corporate__description} container`}>
              We can organize the best water adventure for your team: speed and
              endurance races, exploring wild beaches and bays with panoramic
              views, and a barbecue by the water.
              <br />
              Enter your contacts, and we'll get in touch.
            </p>

            <form className={`${styles.corporate__form} container`} onSubmit={handleSubmit}>
              <div className={styles["custom-input"]}>
                <label className={styles["custom-input__label"]} htmlFor="mail">
                  Your mail
                </label>
                <input
                  className={styles["custom-input__field"]}
                  type="email"
                  name="mail"
                  id="mail"
                  value={formData.mail}
                  onChange={handleChange}
                  placeholder="eddy@community.com"
                  required
                />
              </div>

              <div className={styles["custom-input"]}>
                <label
                  className={styles["custom-input__label"]}
                  htmlFor="phone"
                >
                  Your telephone
                </label>
                <input
                  className={styles["custom-input__field"]}
                  type="tel"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+38267777777"
                  required
                />
              </div>

              <div className={styles["custom-input"]}>
                <label className={styles["custom-input__label"]} htmlFor="name">
                  Your name
                </label>
                <input
                  className={styles["custom-input__field"]}
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Niko Grotik"
                  required
                />
              </div>

              <button className={styles.corporate__button} type="submit">
                Send request
              </button>
            </form>

            <p className={styles.corporate__privacy}>
              By clicking the button, you consent to the
              <Link href="#" className={styles["corporate__privacy-link"]}>
                personal data
              </Link>
              and agree to the privacy policy
            </p>
          </div>
        </>
      )}
    </section>
  );
};

export default Corporate;
