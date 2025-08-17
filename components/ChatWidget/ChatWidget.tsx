"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./ChatWidget.scss";
import { useWindowSize } from "react-use";

const socialsData = [
  {
    name: "WhatsApp",
    iconDefault: "/images/icons/w-li.svg",
    iconHover: "/images/icons/w-dr.svg",
    link: "https://wa.me/38269719904",
    qrCode: "/images/icons/whatsapp-qr.svg",
    buttonText: "Go to WhatsApp",
    buttonIcon: "/images/icons/w-dr.svg",
    description: "Or scan this QR code to contact us on WhatsApp from your phone:"
  },
  {
    name: "Telegram",
    iconDefault: "/images/icons/tg-li.svg",
    iconHover: "/images/icons/tg-dr.svg",
    link: "https://t.me/eddy_community",
    qrCode: "/images/icons/telegram-qr.svg", // QR код для Telegram
    buttonText: "Go to Telegram",
    buttonIcon: "/images/icons/tg-dr.svg",
    description: "Or scan this QR code to contact us on Telegram from your phone:"
  },

  {
    name: "Instagram",
    iconDefault: "/images/icons/inst-li.svg",
    iconHover: "/images/icons/inst-dr.svg",
    link: "https://www.instagram.com/eddy_community",
    qrCode: "/images/icons/instagram-qr.svg", // QR код для Instagram
    buttonText: "Go to Instagram",
    buttonIcon: "/images/icons/inst-dr.svg",
    description: "Or scan this QR code to contact us on Instagram from your phone:"
  },
];

const ChatWidget = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false); // State to track closing animation
  const [isMobile, setIsMobile] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState<number>(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(width <= 425);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // init

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClose = () => {
    setIsClosing(true); // Trigger the closing animation

    // After the closing animation completes, hide the widget
    setTimeout(() => {
      setIsOpen(false); // Hide the widget
      setIsClosing(false); // Reset closing state
    }, 500); // Match the animation duration (500ms)
  };

  const handleOpen = () => {
    setIsOpen(true); // Show the widget when opening
  };

  return (
    <>
      {/* Chat Icon Button */}
      <button
        className="chat-widget__button"
        onClick={handleOpen}
        aria-label="Open chat"
        style={{ zIndex: 1000000 }}
      >
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_976_3388)">
            <circle cx="36" cy="33" r="29.75" fill="#1A1A1A" stroke="white" stroke-width="0.5" />
            <path d="M25.9167 24H46.0834C46.5696 24 47.0359 24.1932 47.3797 24.537C47.7236 24.8808 47.9167 25.3471 47.9167 25.8333V44.1667C47.9188 44.5161 47.82 44.8587 47.6322 45.1534C47.4444 45.4481 47.1756 45.6824 46.858 45.8281C46.6153 45.9408 46.351 45.9995 46.0834 46C45.653 45.999 45.2369 45.8455 44.9089 45.5669L44.8986 45.5589L41.1563 42.3333H25.9167C25.4305 42.3333 24.9642 42.1402 24.6204 41.7964C24.2765 41.4525 24.0834 40.9862 24.0834 40.5V25.8333C24.0834 25.3471 24.2765 24.8808 24.6204 24.537C24.9642 24.1932 25.4305 24 25.9167 24ZM25.9167 40.5H41.5C41.7202 40.5001 41.9329 40.5794 42.0993 40.7234L46.0834 44.1667V25.8333H25.9167V40.5ZM40.5834 31.3333C40.5834 31.0902 40.4868 30.8571 40.3149 30.6852C40.143 30.5132 39.9098 30.4167 39.6667 30.4167H32.3334C32.0903 30.4167 31.8571 30.5132 31.6852 30.6852C31.5133 30.8571 31.4167 31.0902 31.4167 31.3333C31.4167 31.5764 31.5133 31.8096 31.6852 31.9815C31.8571 32.1534 32.0903 32.25 32.3334 32.25H39.6667C39.9098 32.25 40.143 32.1534 40.3149 31.9815C40.4868 31.8096 40.5834 31.5764 40.5834 31.3333ZM40.5834 35C40.5834 34.7569 40.4868 34.5237 40.3149 34.3518C40.143 34.1799 39.9098 34.0833 39.6667 34.0833H32.3334C32.0903 34.0833 31.8571 34.1799 31.6852 34.3518C31.5133 34.5237 31.4167 34.7569 31.4167 35C31.4167 35.2431 31.5133 35.4763 31.6852 35.6482C31.8571 35.8201 32.0903 35.9167 32.3334 35.9167H39.6667C39.9098 35.9167 40.143 35.8201 40.3149 35.6482C40.4868 35.4763 40.5834 35.2431 40.5834 35Z" fill="white" />
          </g>
          <defs>
            <filter id="filter0_d_976_3388" x="0.3" y="0.3" width="71.4" height="71.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dy="3" />
              <feGaussianBlur stdDeviation="2.85" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_976_3388" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_976_3388" result="shape" />
            </filter>
          </defs>
        </svg>


      </button>

      {/* Modal Overlay */}
      <div
        className={`support ${isOpen ? "open" : ""} ${isClosing ? "closing" : ""}`}
        style={{ zIndex: 1000000 }}
      >
        <div className="headerchar">
          <button
            className="close-btn"
            onClick={handleClose}
            aria-label="Close chat"
          >
            {isMobile ? (
              <img src="/images/icons/closewid.svg" alt="closewid.svg" />
            ) : (
              <img src="/images/icons/krestik.svg" alt="krestik.svg" />
            )}
          </button>
          <img
            src="/images/icons/logo_def_L.svg"
            alt="Eddy Logo"
            className="logo"
          />
          <p className="subtitle">We are here to help you!</p>
        </div>
        <div className="bodychar">
          <div className="socials">
            {socialsData.map((social, index) => (
              <div
                key={index}
                className={`social-item ${hovered === index ? "hovered" : ""} ${selectedSocial === index ? "selected" : ""}`}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => setSelectedSocial(index)} // Переключение при клике
              >
                <img
                  src={hovered === index ? social.iconHover : social.iconDefault}
                  alt={social.name}
                />
                <span>{social.name}</span>
              </div>
            ))}
          </div>
          <div className="go-button">
            <a
              href={socialsData[selectedSocial].link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={socialsData[selectedSocial].buttonIcon}
                alt={socialsData[selectedSocial].name}
              />
              {socialsData[selectedSocial].buttonText}
            </a>
          </div>
          <div className="qr-section">
            <p>
              {socialsData[selectedSocial].description}
            </p>
            <img
              src={socialsData[selectedSocial].qrCode}
              alt={`${socialsData[selectedSocial].name} QR Code`}
              className="qr-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
