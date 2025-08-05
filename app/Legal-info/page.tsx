"use client";
import React from "react";
import styles from "./style.module.scss";

import dynamic from "next/dynamic";

const ContactTabs = dynamic(
  () => import("@/components/contactTabs/ContactTabs"),
  { ssr: false }
);

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navBar/NavBar";
import { useState } from "react";
import { Frame } from "./components/frame/Frame";
import { FrameWrapper } from "./components/frame-wrapper/FrameWrapper";

function Page() {
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
      <section>
        <div className={styles.sectionL}>
          <div className={styles.headerL}>
            <h1 className={styles.titleL}>Terms and Conditions</h1>
            <hr className={styles.hrL} />
            <h2 className={styles.subtitleL}>Effective date: July 25, 2025</h2>
          </div>
          <div>
            <Frame />
            <FrameWrapper />
          </div>
        </div>
      </section>

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

export default Page;
