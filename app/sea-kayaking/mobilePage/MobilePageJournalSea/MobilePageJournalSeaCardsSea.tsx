import styles from "./MobilePageJournalSea.module.scss";
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
];

function MobilePageJournalCardsSea() {
  return (
    <div className={styles.MobilePageseajournalSlider}>
      <div className={styles.MobilePageseajournalSlider__container}>
        {journalData.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={styles.MobilePageseajournalSlider__link}
          >
            <div className={styles.MobilePageseajournalSlider__imageWrapper}>
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                width={360}
                height={203}
              />
            </div>
            <h3 className={styles.MobilePageseajournalSlider__title}>
              {item.title}
            </h3>
            <p className={styles.MobilePageseajournalSlider__text}>
              {item.text}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MobilePageJournalCardsSea;
