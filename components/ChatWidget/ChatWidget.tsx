"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./ChatWidget.scss";
import { useWindowSize } from "react-use";

const socials = [
  {
    name: "Telegram",
    iconDefault: "/images/icons/tg-li.svg",
    iconHover: "/images/icons/tg-dr.svg",
    link: "https://t.me/eddy_community",
  },
  {
    name: "WatsApp",
    iconDefault: "/images/icons/w-li.svg",
    iconHover: "/images/icons/w-dr.svg",
    link: "https://wa.me/38269719904",
  },
  {
    name: "Instagram",
    iconDefault: "/images/icons/inst-li.svg",
    iconHover: "/images/icons/inst-dr.svg",
    link: "https://www.instagram.com/eddy_community",
  },
];

const ChatWidget = () => {
  const { width } = useWindowSize();
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isClosing, setIsClosing] = useState(false); // State to track closing animation
  const [isMobile, setIsMobile] = useState(false);

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
        <Image
          src="/images/icons/Chat_button.svg"
          alt="Chat Icon"
          width={20}
          height={20}
        />
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
            {socials.map((social, index) => (
              <a
                href={social.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <div
                  className={`social-item ${hovered === index ? "hovered" : ""}`}
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <img
                    src={
                      hovered === index ? social.iconHover : social.iconDefault
                    }
                    alt={social.name}
                  />
                  <span>{social.name}</span>
                </div>
              </a>
            ))}
          </div>
          <div className="go-button">
            <a
              href="https://t.me/eddy_community"
              target="_blank"
              rel="noreferrer"
            >
              <img src={"/images/icons/tg-dr.svg"} alt={"telegram"} /> Go to
              Telegram
            </a>
          </div>

          <div className="qr-section">
            <p>
              Or scan this QR code to contact us <br /> on Telegram from your
              phone:
            </p>
            <img
              src="/images/icons/qr.svg"
              alt="QR Code"
              className="qr-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
