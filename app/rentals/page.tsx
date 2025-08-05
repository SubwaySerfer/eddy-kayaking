"use client";

import React, { useState } from "react";
import Image from "next/image";
import "./Rental.scss";
import Navbar from "@/components/navBar/NavBar";
import dynamic from "next/dynamic";

const ContactTabs = dynamic(
  () => import("@/components/contactTabs/ContactTabs"),
  { ssr: false }
);

import Footer from "@/components/footer/Footer";
import { rentals } from "./constants";
import RentalHeader from "./components/Header/RentalsHeader";
import Select from "./components/Select/Select";
import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";

const Rentals = () => {
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
      <RentalHeader />
      <section className="rentalPage">
        <div className="rentalPage__headerText">
          <p>
            Kayaking and SUP are among the safest outdoor activities. Whether
            you're gliding with the wind or paddling in calm waters, it’s always
            an enjoyable experience — and with rental gear, you’re free to
            explore the coastline at your own pace.
          </p>
          <p>
            The rental price includes free instruction, a life jacket, and a dry
            bag. We’ll be happy to recommend the most scenic and interesting
            routes and provide all the necessary guidance for your trip.
          </p>
        </div>

        <Select />

        <div className="rentalPage__grid">
          {rentals.map((item) => (
            <div key={item.id} className="rentalPage-card">
              <div className="rentalPage-card__image">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={80}
                />
              </div>
              <h3 className="rentalPage-card__title">{item.name}</h3>
              <ul className="rentalPage-card__info">
                <li>
                  {" "}
                  <span className="a">Type:</span> <span>{item.type}</span>
                </li>
                <li>
                  {" "}
                  <span className="a">Length:</span> <span>{item.length}</span>
                </li>
                <li>
                  <span className="a">Width:</span> <span>{item.width}</span>
                </li>
                {item.weight && (
                  <li>
                    <span>Weight:</span> <span>{item.weight}</span>
                  </li>
                )}
                <li>
                  <span className="a">Capacity:</span>{" "}
                  <span>{item.capacity}</span>{" "}
                </li>
                <li>
                  <span className="a">Seats:</span> <span>{item.seats}</span>
                </li>
                <li>
                  <span>Price:</span>
                  <div className="b">
                    <span className="rentalPage-card__prices__span mr-2">
                      {item.priceHour}
                    </span>
                    <span className="rentalPage-card__prices__span">
                      {item.priceDay}
                    </span>
                  </div>
                </li>
              </ul>
              <button className="rentalPage-card__button">Book</button>
              <div className="widget-wrapper">
                <div className="widget-frame">
                  <div className="widget-frame-inner">
                    <div
                      className="bokunWidget"
                      data-src="https://widgets.bokun.io/online-sales/db41ee79-08df-48bc-b3d2-da0c3dbca7ed/experience-calendar/1016505"
                    ></div>
                  </div>
                </div>
                <div className="widget-logo">
                  <img
                    src="/images/rental/kayak_orca-base.png"
                    alt="Your Logo"
                    style={{ height: "100%" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <FaqAccordion
          items={[
            {
              question: "What if I have no paddling experience at all?",
              answer:
                "No problem! We’ll teach you the basics, and we never let anyone hit the water without a proper briefing first.",
            },
            {
              question: "Are there any rental restrictions?",
              answer:
                "You should feel comfortable being physically active and spending a few hours on the water. If you have any health concerns, feel free to check with us before booking. Please note that we may refuse service if you are under the influence of alcohol or not dressed appropriately for water activities.",
            },
            {
              question: "Can I extend my rental?",
              answer:
                "Yes, you’re welcome to extend your rental when you return the equipment. Our staff keeps track of departure and return times — extra time is billed in 30-minute increments and can be paid directly on-site.",
            },
            {
              question: "What time should I return the equipment?",
              answer:
                "You should return the equipment within our working hours, no later than 8 PM, when the rental point closes.",
            },
            {
              question: "What should I pack?",
              answer:
                "After booking, we’ll send you a ticket with a detailed packing list with everything you’ll need—from clothing and footwear to small personal items.",
            },
            {
              question: "Will my personal belongings stay dry?",
              answer:
                "We have high-quality dry bags in all sizes. You can store your essentials in them, and any other items can be left with our staff for safekeeping.",
            },
            {
              question: "Can I bring a child with me?",
              answer:
                "Yes, you can bring a child with you! We have double kayaks in our fleet, which are perfect for kids.",
            },
            {
              question: "Can I bring my dog?",
              answer:
                "It’s your personal adventure, so feel free to bring your pet along.",
            },
          ]}
        />

        {/* <Questions /> */}
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

export default Rentals;
