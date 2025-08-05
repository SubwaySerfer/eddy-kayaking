"use client";
import dynamic from "next/dynamic";

const ContactTabs = dynamic(
  () => import("@/components/contactTabs/ContactTabs"),
  { ssr: false }
);

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navBar/NavBar";
import { useState } from "react";

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
        <div style={{ height: "50vh", color: "black", fontSize: "50px" }}>
          <h1>Gift-certificates</h1>
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
