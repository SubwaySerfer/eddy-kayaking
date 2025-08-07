import React from "react";
import Image from "next/image";
import styles from "./ReviewCard.module.scss";

const ReviewCard = ({ name, text, href, avatar }: any) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.review__avatar}>
        <Image src={avatar} alt={name} width={100} height={100} />
        {name}
      </div>

      <div className={styles.review}>
        <div className={styles.review__content}>
          <p className={styles.review__text}>{text}</p>

          <div className={styles.review__footer}>
            <div className={styles.review__stars}>
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src="/images/icons/review-star.svg"
                  alt="Star"
                  width={30}
                  height={30}
                />
              ))}
            </div>
            <a
              href={href}
              className={styles.review__link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
