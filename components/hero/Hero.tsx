import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__img}>
        <Image
          src="/images/main/hero.png"
          alt="Sea kayaking"
          fill
          priority
          quality={100}
          className={styles.hero__image}
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <Link href="/sea-kayaking" style={{ width: "100vw" }}>
        <div className={styles.hero__content}>
          <h1 className={styles.hero__title}>SEA KAYAKING</h1>
            <picture className={styles.img__fluid}>
            <source srcSet="/images/icons/coming-soon-mobile.svg" media="(max-width: 767px)" />
            <img src="/images/main/coming-soon.svg" alt="Coming Soon" />
            </picture>
        </div>
      </Link>
    </section>
  );
};

export default Hero;
