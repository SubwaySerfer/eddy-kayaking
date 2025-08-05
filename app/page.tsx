"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import NavCards from "@/components/navcards/NavCards";
import Rental from "@/components/rental/Rental";
import Tours from "@/components/tours/Tours";
import Journal from "@/components/journal/Journal";
import Corporate from "@/components/corporate/Corporate";
import Reviews from "@/components/review/Reviews";
import Footer from "@/components/footer/Footer";
import dynamic from "next/dynamic";

const ContactTabs = dynamic(
  () => import("@/components/contactTabs/ContactTabs"),
  { ssr: false }
);

import Navbar from "@/components/navBar/NavBar";
import { useWindowSize } from "react-use";

export default function Home() {
  const { width } = useWindowSize();
  const [showNavbar, setShowNavbar] = useState(() => width <= 425);
  const [selectedLocation, setSelectedLocation] = useState<"budva" | "skadar">(
    "budva"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const width = window.innerWidth;
      const scrollY = window.scrollY;

      if (width > 425) {
        setShowNavbar(scrollY >= 425);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // вызываем один раз сразу
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        style={{
          transition: "opacity 0.5s ease",
        }}
      >
        <Header
          setSelectedLocation={setSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </div>

      {showNavbar && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            zIndex: 9999,
          }}
        >
          <Navbar
            setSelectedLocation={setSelectedLocation}
            selectedLocation={selectedLocation}
          />
        </div>
      )}

      <main>
        <Hero />
        <NavCards />
        <Rental />
        <Tours />
        <Journal />
        <Corporate />
        <Reviews />
      </main>

      <footer>
        {selectedLocation && (
          <ContactTabs
            activeTab={selectedLocation}
            setActiveTab={setSelectedLocation}
          />
        )}
        <Footer />
      </footer>
    </>
  );
}
