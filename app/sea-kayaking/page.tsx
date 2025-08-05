"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/components/navBar/NavBar";
import DesktopPageHeader from "./desktopPage/DesktopPageHeader/DesktopPageHeader";
import DesktopPageImageSlider from "./desktopPage/DesktopPageImageSlider/DesktopPageImageSlider";
import {
  faqSeaKayaking,
  guidesSeaKayaking,
  imagesBanner1SeaKayaking,
  imagesBanner2SeaKayaking,
  introSeaKayaking,
} from "./constants";
import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";
import Footer from "@/components/footer/Footer";
import DesktopPageBuyNow from "./desktopPage/DesktopPageBuyNow/DesktopPageBuyNow";
import DesktopPageToDo from "./desktopPage/DesktopPageToDo/DesktopPageToDoToDo";
import DesktopPageSchedule from "./desktopPage/DesktopPageSchedule/DesktopPageSchedule";
import DesktopPageGuide from "./desktopPage/DesktopPageGuide/DesktopPageGuide";
import DesktopPageJournalSea from "./desktopPage/DesktopPageJournal/DesktopPageJournalSea";
import MobilePageJournalSea from "./mobilePage/MobilePageJournalSea/MobilePageJournalSea";
import MobilePageGuide from "./mobilePage/MobilePageGuide/MobilePageGuide";
import MobilePageSchedule from "./mobilePage/MobilePageSchedule/MobilePageSchedule";
import MobilePageBuyNow from "./mobilePage/MobilePageBuyNow/MobilePageBuyNow";
import { useWindowSize } from "react-use";

const Page = () => {
  const { width } = useWindowSize();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState<"budva" | "skadar">(
    "budva"
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const checkScreenSize = () => {
      setIsMobile(width < 426);
    };

    window.addEventListener("resize", checkScreenSize);
    checkScreenSize();
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <>
      <nav>
        <Navbar
          setSelectedLocation={setSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </nav>
      <section className="MobilePagesea">
        <DesktopPageHeader />
        {isMobile ? <MobilePageBuyNow /> : <DesktopPageBuyNow />}
        <DesktopPageImageSlider images={imagesBanner1SeaKayaking} />
        <DesktopPageToDo />
        {isMobile ? <MobilePageSchedule /> : <DesktopPageSchedule />}
        <DesktopPageImageSlider images={imagesBanner2SeaKayaking} />
        {isMobile ? (
          <MobilePageGuide
            guides={guidesSeaKayaking}
            intro={introSeaKayaking}
            src={"/images/sea/c59880e0ab715ddb3b54bab1f829ce54e6fbf08c.jpg"}
          />
        ) : (
          <DesktopPageGuide
            guides={guidesSeaKayaking}
            intro={introSeaKayaking}
            src={"/images/sea/c59880e0ab715ddb3b54bab1f829ce54e6fbf08c.jpg"}
          />
        )}
        {isMobile ? <MobilePageJournalSea /> : <DesktopPageJournalSea />}
        <FaqAccordion items={faqSeaKayaking} />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Page;
