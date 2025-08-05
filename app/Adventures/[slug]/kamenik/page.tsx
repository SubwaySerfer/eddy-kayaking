"use client";

import dynamic from "next/dynamic";

const ContactTabs = dynamic(
  () => import("@/components/contactTabs/ContactTabs"),
  { ssr: false }
);

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navBar/NavBar";
import "./Sea.scss";
import ToursPagesHeader from "@/components/toursPagesHeader/ToursPagesHeader";
import Guide from "@/app/sea-kayaking/desktopPage/DesktopPageGuide/DesktopPageGuide";
import ImageSlider from "@/app/sea-kayaking/desktopPage/DesktopPageImageSlider/DesktopPageImageSlider";
import FaqAccordion from "@/components/FaqAccordion/FaqAccordion";
import { useState } from "react";
import { imagesBanner1 } from "./constants";

function Kamenik() {
  const [selectedLocation, setSelectedLocation] = useState<"budva" | "skadar">(
    "budva"
  );

  const guides = [
    {
      name: "ANTON TOUGARIN",
      image: "/images/toursPages/kamenik/guide/1.jpg",
      text: (
        <>
          <p>
            Anton has been drawn to an active life since childhood — football,
            martial arts, swimming, survival schools. He didn’t just try things,
            he dove straight into whatever felt exciting and a little risky.
          </p>
          <p>
            His paddling journey began not with calm waters, but with cold
            mountain rivers, rain, and real fear. But in that rush of current
            and fog, he found a deep love for the water. Now Anton leads kayak
            tours on Lake Skadar, turning his rugged experience into calm,
            beautiful adventures.
          </p>
          <p>
            Fun fact: Anton throws axes professionally — and does it with the
            same confidence he brings on the water. The only ones more reliable?
            Maybe the Baywatch crew.
          </p>
        </>
      ),
    },
    {
      name: "STEPAN DEMCHENKO",
      image: "/images/toursPages/kamenik/guide/2.jpg",
      text: (
        <>
          <p>
            Stepan grew up by the sea and has spent most of his life on the
            water — first working with dolphins for over a decade, then shifting
            into kayak and SUP guiding.
          </p>
          <p>
            For the past three years, he’s led small groups along remote coastal
            routes he knows by heart — always tuned in to the weather, the
            water, and the rhythm of the team. His style blends solid technical
            skills with a deep feel for the environment and group dynamics.
          </p>
          <p>
            Red Cross certified as a lifeguard, he keeps a steady focus on
            safety, bringing a calm, professional presence to every trip — and
            always a story or two along the way.
          </p>
        </>
      ),
    },
  ];

  const intro = (
    <>
      <p>
        We’re thoughtful about who we send out on the water — it’s not just
        about skill, but presence.
      </p>
      <p>
        On Skadar, your guide is more than a paddler. They notice the birds,
        tell the stories, and give space to the quiet.
      </p>
    </>
  );

  return (
    <>
      <nav>
        <Navbar
          setSelectedLocation={setSelectedLocation}
          selectedLocation={selectedLocation}
        />
      </nav>
      <section className="sea">
        <ToursPagesHeader
          title="Kamenik Island"
          description="Navigate tranquil waterways, explore secluded coves, and encounter the lake's abundant wildlife, including over 270 species of birds."
          imageDesktop="/images/toursPages/kamenik/1.jpg"
          imageMobile="/images/toursPages/kamenik/2.jpg"
          mobileTagline="WHERE LILIES REIGN"
        />
        {/* <BuyNow /> */}
        <ImageSlider images={imagesBanner1} />
        {/* <ToDo />
        <Schedule /> */}
        {/* <ImageSlider images={imagesBanner2} /> */}
        <Guide
          guides={guides}
          intro={intro}
          src={"/images/toursPages/kamenik/guide/3.jpg"}
        />
        {/* <Journal/> */}
        <FaqAccordion
          items={[
            {
              question: "What if I have no paddling experience at all?",
              answer:
                "No problem! We'll teach you the basics and support you throughout the trip. The route is designed for beginners and those with moderate experience.",
            },
            {
              question: "Are there any restrictions for joining the tour?",
              answer:
                "You should feel comfortable being physically active and spending few hours on the water. If you have health concerns, feel free to check with us before booking. Please note that we may refuse service if you are under the influence of alcohol or not dressed appropriately for water activities.",
            },
            {
              question: "Will my personal belongings stay dry?",
              answer:
                "We have high-quality dry bags in all sizes. You can store your essentials in them, and any other items can be left with our staff for safekeeping.",
            },
            {
              question: "How much time will we spend on the water?",
              answer:
                "Regular tours last usually 3 or 4 hours. We have breaks for swimming, and exploring coastal rocks, caves and scheduled beaches.",
            },
            {
              question: "What should I pack?",
              answer:
                "After booking, we’ll send you a ticket with a detailed packing list with everything you’ll need—from clothing and footwear to small personal items.",
            },
            {
              question: "How and when will I meet the team and the guide?",
              answer:
                "You’ll meet the team at the starting point, where everyone gathers about 10 minutes before the tour begins. That’s when we hand out gear and walk you through a short safety and paddling briefing. The exact meeting spot is shown in the tour’s booking details and on your ticket.",
            },
            {
              question: "Can I bring a child with me?",
              answer:
                "Absolutely — kids of all ages have a great time on our tours. We have stable, family-friendly double kayaks that comfortably fit two adults and one or even two children.",
            },
            {
              question: "Can I bring my dog?",
              answer:
                "We’re always happy to welcome four-legged friends. If you’re confident your pup will be comfortable on the water and won’t mind the company of others, feel free to bring them along for the ride.",
            },
            {
              question:
                "If I choose a SUP board, will I fall behind the kayak group?",
              answer:
                "Not at all. You’ll paddle at your own comfortable pace — SUP groups are led by a separate guide who’s also on a board, so you’ll never feel rushed or left behind.",
            },
          ]}
        />
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
}

export default Kamenik;
