"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./WaterAdventures.scss";
import Navbar from "@/components/navBar/NavBar";
import dynamic from "next/dynamic";

const ContactTabs = dynamic(
  () => import("@/components/contactTabs/ContactTabs"),
  { ssr: false }
);

import Footer from "@/components/footer/Footer";
import Header from "./components/Header";
import QuestionsTours from "./components/Questions/Questions";
import Link from "next/link";
import { adventures } from "./constants";

const WaterAdventures = () => {
  const [selectedLocation, setSelectedLocation] = useState<"budva" | "skadar">(
    "budva"
  );

  return (
    <>
      <nav>
        <Navbar
          setSelectedLocation={setSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </nav>
      <section className="adventures">
        <div className="heroHeader">
          <img
            src="/images/tours/Frame 4740.png"
            alt="Kayaking in Montenegro"
          />
        </div>
        <div className="containerAdventures">
          <Header />
          <div className="adventures__grid">
            {adventures.map((adv) => (
              <Link href={adv.link}>
                <div className="adventure-card" key={adv.id}>
                  <div className="adventure-card__image">
                    <Image src={adv.image} alt={adv.title} fill />
                    <span className="adventure-card__price">{adv.price}</span>
                    <span className="adventure-card__tag">{adv.location}</span>
                  </div>
                  <div className="adventure-card__body">
                    <h3 className="adventure-card__title">{adv.title}</h3>
                    <p className="adventure-card__description">
                      {adv.description}
                    </p>
                  </div>
                  <button className="adventure-card__button">
                    More details
                  </button>
                </div>
              </Link>
            ))}
          </div>
          dcds
          <QuestionsTours />
        </div>
      </section>
      <footer>
        <ContactTabs
          activeTab={selectedLocation}
          setActiveTab={setSelectedLocation}
        />
        <Footer />
      </footer>
    </>
  );
};

export default WaterAdventures;
