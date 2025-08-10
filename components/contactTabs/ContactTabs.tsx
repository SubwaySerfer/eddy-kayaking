"use client";
import React, { useEffect, useRef, useState } from "react";
import "./ContactTabs.scss";
import Image from "next/image";
import Link from "next/link";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

import { MapStyle, MaptilerLayer } from "@maptiler/leaflet-maptilersdk";

type TabId = "skadar" | "budva";

const tabs = [
  { id: "skadar" as TabId, label: "SKADAR" },
  { id: "budva" as TabId, label: "BUDVA" },
];

const contactData: Record<
  TabId,
  {
    phone: string;
    email: string;
    address: any;
    hours: string;
    mapSrc: string;
  }
> = {
  budva: {
    phone: "+382 (69) 71-99-04",
    email: "eddyletspaddle@gmail.com",
    address: (
      <>
        {" "}
        <p><strong>Rentals</strong> Azzuro Beach, Budva 85310, Montenegro</p>
        <p><strong>Tours</strong> Slovenska Plaža, Budva 85310, Montenegro</p>
        {" "}
      </>
    ),
    hours: "We operate daily from 8 AM to 8 PM",
    mapSrc:
      "https://maps.google.com/maps?q=Budva&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
  skadar: {
    phone: "+382 (69) 71-99-04",
    email: "eddyletspaddle@gmail.com",
    address: "Naselje, Vranjina 81000, Montenegro",
    hours: "We operate daily from 8 AM to 8 PM",
    mapSrc:
      "https://maps.google.com/maps?q=Skadar&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },
};

const ContactTabs = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: TabId;
  setActiveTab: (id: TabId) => void;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // Добавляем проверку на существование activeTab
  if (!activeTab || !contactData[activeTab]) {
    console.warn("activeTab is undefined or invalid:", activeTab);
    return null; // или можно вернуть fallback UI
  }

  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);
  const center = { lng: 18.83761422687735, lat: 42.27870911474918 };
  const [zoom] = useState(16);

  useEffect(() => {
    if (!isMounted || !mapContainer.current) return;

    if (!map.current) {
      map.current = new L.Map(mapContainer.current, {
        center: L.latLng(center.lat, center.lng),
        zoom: zoom,
        scrollWheelZoom: false,
      });

      new MaptilerLayer({
        apiKey: "osdUv2iqvc0TkLCj3xbS",
        style: MapStyle.STREETS.LIGHT,
      }).addTo(map.current);
    }

    // Очистить предыдущие маркеры
    map.current.eachLayer((layer: any) => {
      if (layer instanceof L.Marker) {
        map.current.removeLayer(layer);
      }
    });

    const LeafIcon = L.Icon.extend({
      options: {
        iconUrl: "/images/icons/anchor.png",
        iconSize: [25, 30],
      },
    });

    const leafIcon = new LeafIcon();

    const locations: Record<TabId, any> = {
      budva: [
        [42.2847531, 18.8456055],
        [42.2839554, 18.8409819],
      ],
      skadar: [[42.2786938, 19.130431]],
    };

    locations[activeTab].forEach(([lat, lng]: any) => {
      L.marker([lat, lng], { icon: leafIcon }).addTo(map.current);
    });

    const [centerLat, centerLng] = locations[activeTab][0];
    map.current.setView([centerLat, centerLng], zoom);
  }, [activeTab, isMounted]);

  const data = contactData[activeTab];

  return (
    <section className="contact-tabs">
      <div className="contact-tabs__tabs">
        <div className="contact-tabs__wrapper">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`contact-tabs__tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {activeTab === tab.id && (
                <span className="icon-location">
                  <img src="/images/icons/tabIcon.svg" alt="budva" />
                </span>
              )}{" "}
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="contact-tabs__content">
        <div className="contact-tabs__map">
          <div className="map-wrap">
            <div ref={mapContainer} className="map" />
          </div>
        </div>

        <div className="contact-tabs__info">
          <h3>Contacts</h3>
          <a href={`tel:${data?.phone}`} className="contact-tabs__phone">
            {data?.phone}
          </a>
          <a href={`mailto:${data?.email}`} className="contact-tabs__email">
            {data?.email}
          </a>
          {data?.address}
          <p style={{ marginTop: "8px" }}>{data?.hours}</p>

          <div className="contact-tabs__socials">
            <Link
              href="https://www.facebook.com/share/1ANAhvYso1/?mibextid=wwXIfr"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/icons/FB.svg"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://instagram.com/eddy_community"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image
                src="/images/icons/instagram.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://wa.me/38269719904"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="watsApp"
            >
              <Image
                src="/images/icons/w-foo.svg"
                alt="watsApp"
                width={24}
                height={24}
              />
            </Link>
            <Link
              href="https://t.me/eddy_community"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
            >
              <Image
                src="/images/icons/telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactTabs;
