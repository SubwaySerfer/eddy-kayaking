"use client";
import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsSlider.module.scss";
import Image from "next/image";

const reviewsData = [
  {
    id: 1,
    name: "Marcin Bitel",
    text: "Stepan was our guide for this kayaking tour around Old Budva and to the cliffs and caves beyond, and he was both patient and fun. We had a lovely experience, with the added bonus of loads of photos and videos that Stepan kindly sent us afterwards. Would recommend to anybody fit enough to paddle!",
    href: "https://maps.app.goo.gl/imcFSw7c8h35LhXj6",
    avatar: "/images/reviews/martin.png",
  },
  {
    id: 2,
    name: "Joanna Prince",
    text: "My family of nine all enjoyed this kayak rental and tour. The guides were helpful, knowledgeable, and great at showing us the best spots. They led us into caves and to a secluded, quiet beach. This experience was a highlight of our trip.",
    href: "https://maps.app.goo.gl/8KPpyyS9rcwkVFKv8",
    avatar: "/images/reviews/joan.svg",
  },
  {
    id: 3,
    name: "Canran Yang",
    text: "This is the best tour I've ever been on! The instructor was very patient and also skilled at taking photos and videos. It was my first time trying SUP, but with his guidance, it felt easy. The views were incredible—I highly recommend Pigeon Cave, where the sea is crystal clear and completely free of tourists!",
    href: "https://maps.app.goo.gl/AQ5Hn6E1ufxDEHm29",
    avatar: "/images/reviews/yang.svg",
  },
  {
    id: 4,
    name: "Кateryna",
    text: "Today, I had my first-ever kayaking experience on Lake Skadar, and I absolutely loved it! Instructor Kirill explained all the essential water safety tips in a clear and accessible way, making the experience even more enjoyable. It was simply wonderful — I highly recommend it!",
    href: "https://maps.app.goo.gl/gnGxQG5oEoj5mK3E7",
    avatar: "/images/reviews/may.svg",
  },
  {
    id: 5,
    name: "Abby Park",
    text: "Stepan was an amazing tour guide! He shared lots of interesting information about the local sights and captured plenty of photos and videos, allowing us to fully enjoy the experience 😊 The views were absolutely stunning, and we loved taking a break to go snorkeling in one of the coves. Highly recommend this tour to anyone visiting Budva!",
    href: "https://maps.app.goo.gl/yZx1TeMCZVpHyfJ76",
    avatar: "/images/reviews/abby.svg",
  },
];

const ReviewsSlider = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const next = () => {
    setIndex((prev) => (prev + 1) % reviewsData.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <div className={`${styles.slider} container`}>
      <h2 className={styles.slider__title}>What people say about <br className="hide-mobile"/>
        EDDY tours</h2>
      {isMobile ? (
        <div className={styles.slider__reviews}>
          {reviewsData.map((review) => (
            <div key={review.id} className={styles.slider__card}>
              <ReviewCard {...review} />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.slider__reviews}>
          <button onClick={prev} className={styles.slider__arrow}>
            <Image
              src="/images/icons/arrow-left.svg"
              alt="prev"
              width={24}
              height={24}
            />
          </button>
          <ReviewCard {...reviewsData[index]} />
          <button onClick={next} className={styles.slider__arrow}>
            <Image
              src="/images/icons/arrow-right.svg"
              alt="next"
              width={24}
              height={24}
            />
          </button>
        </div>
      )}
      <div className={styles.reviewus}>
        Review us on{" "}
        <a
          href="https://g.page/r/CSmGHMb13JqIEAE/review"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/icons/google.svg"
            alt="google.svg"
            className="google"
          />
        </a>{" "}
        or{" "}
        <a
          href="https://www.tripadvisor.com/UserReviewEdit-g304074-d12877654-SUP_Kayaking_Tours-Budva_Budva_Municipality.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/reviews/reviewtrip.svg"
            alt="reviewtrip.svg"
            className="reviewtrip"
          />
        </a>
      </div>
    </div>
  );
};

export default ReviewsSlider;
