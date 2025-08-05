import styles from "./DesktopPageJournal.module.scss";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const journalData = [
  {
    href: "#",
    imageSrc: "/images/journal/journal-1.png",
    imageAlt: "Kayak and tent by the sea",
    title: "Coming Soon",
    text: "Coming Soon.",
  },
  {
    href: "#",
    imageSrc: "/images/journal/journal-2.png",
    imageAlt: "Kayak in a cove",
    title: "Coming Soon",
    text: "Coming Soon",
  },
  {
    href: "#",
    imageSrc: "/images/journal/journal-3.png",
    imageAlt: "Shoes on the shore",
    title: "Coming Soon",
    text: "Coming Soon",
  },
  {
    href: "#",
    imageSrc: "/images/journal/journal-2.png",
    imageAlt: "Kayak in a cove",
    title: "Coming Soon",
    text: "Coming Soon",
  },
  {
    href: "#",
    imageSrc: "/images/journal/journal-3.png",
    imageAlt: "Shoes on the shore",
    title: "Coming Soon",
    text: "Coming Soon",
  },
];

function DesktopPageJournalCardsSea() {
  return (
    <div className={styles.desktoppageseajournalSlider}>
      <div className={styles.desktoppageseajournalSlider__container}>
        {journalData.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={styles.desktoppageseajournalSlider__link}
          >
            <div className={styles.desktoppageseajournalSlider__imageWrapper}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={360}
                height={203}
              />
            </div>
            <h3 className={styles.desktoppageseajournalSlider__title}>
              {item.title}
            </h3>
            <p className={styles.desktoppageseajournalSlider__text}>
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default DesktopPageJournalCardsSea;
