"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.scss";
import { locations } from "@/app/constants";
import { usePathname, useRouter } from "next/navigation";

const menuItems = [
  { name: "Adventures", link: "adventures" },
  { name: "Rentals", link: "rentals" },
  { name: "Sea Kayaking", link: "sea-kayaking" },
  { name: "Market", link: "market" },
  { name: "Journal", link: "Journal" },
  { name: "More", link: "" },
];

const moreMenuItems = [
  { name: "Adventures", link: "adventures" },
  { name: "Rentals", link: "rentals" },
  { name: "Sea Kayaking", link: "sea-kayaking" },
  { name: "Market", link: "market" },
  { name: "Gift Certificates", link: "gift-certificates" },
  { name: "Corporate Tours", link: "corporate-tours" },
  { name: "Contacts", link: "/" },
  { name: "About", link: "about" },
];

const Navbar = ({
  selectedLocation,
  setSelectedLocation,
}: {
  selectedLocation: "budva" | "skadar";
  setSelectedLocation: (location: "budva" | "skadar") => void;
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMoreMenuOpen, setMoreMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleLocationChange = (id: string) => {
    if (id === "budva" || id === "skadar") {
      setSelectedLocation(id as "budva" | "skadar");
    }
    setDropdownOpen(false);
    handleContactsClick();
  };

  const handleContactsClick = async () => {
    setMoreMenuOpen(false);
    setMobileMenuOpen(false);
    if (pathname !== "/") {
      await router.push("/");
      setTimeout(() => {
        document
          .querySelector("footer")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".custom-dropdown")) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link href="/">
          <Image
            src="/images/icons/logo_def_L.svg"
            alt="EDDY Logo"
            width={100}
            height={40}
            className="navbar__logo"
          />
        </Link>

        <nav className="navbar__menu">
          {menuItems.map((item) =>
            item.name === "More" ? (
              <span
                key="more"
                className="navbar__link"
                onClick={() => {
                  setMobileMenuOpen(false); // 👈 обязательно
                  setMoreMenuOpen(true);
                }}
              >
                {item.name.toUpperCase()}
              </span>
            ) : (
              <Link
                key={item.name}
                href={`/${item.link}`}
                className="navbar__link"
              >
                {item.name.toUpperCase()}
              </Link>
            )
          )}
        </nav>

        <div className="navbar__location custom-dropdown">
          <img
            src="/images/icons/tabIcon.svg"
            alt="location"
            className="anchorNavbar"
          />
          <div className="dropdown-wrapper">
            <div
              className="dropdown-trigger"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {selectedLocation.toUpperCase()} <img src="/images/icons/arrow-dwn.svg" alt="arrow down." />
            </div>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {locations.map((loc) => (
                  <div
                    key={loc.id}
                    className="dropdown-option"
                    onClick={() => handleLocationChange(loc.id)}
                  >
                    {loc.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            className="navbar__toggle"
            onClick={handleContactsClick}
            aria-label="Open menu"
          >
            <img
              src="/images/icons/tabIcon.svg"
              alt="location"
              className="anchorNavbarMobile"
            />
          </button>

          <button
            className="navbar__toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      {(isMoreMenuOpen || isMobileMenuOpen) && (
        <div className="navbar__overlay">
          <button
            className="navbar__close"
            onClick={() => {
              setMobileMenuOpen(false); // 👈 обязательно
              setMoreMenuOpen(false);
            }}
          >
            ✕
          </button>
          <ul className="navbar__overlay-menu">
            {moreMenuItems.map((item) => (
              <li key={item.name}>
                {item.name === "Contacts" ? (
                  <span onClick={handleContactsClick}>
                    {item.name.toUpperCase()}
                  </span>
                ) : (
                  <Link
                    href={`/${item.link}`}
                    onClick={() => setMoreMenuOpen(false)}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {/* 👇 добавь сюда блок социальных иконок */}
          <div className="navbar__overlay-socials">
            <a
              href="https://instagram.com/eddy_community"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icons/instanavbar.svg" alt="Instagram" />
            </a>
            <a
              href="https://t.me/eddy_community"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icons/teleganav.svg" alt="Telegram" />
            </a>
          </div>
        </div>
      )}

      {/* More Overlay */}
      {(isMoreMenuOpen || isMobileMenuOpen) && (
        <div className="navbar__overlay">
          <button
            className="navbar__close"
            onClick={() => {
              setMobileMenuOpen(false); // 👈 обязательно
              setMoreMenuOpen(false);
            }}
          >
            ✕
          </button>
          <ul className="navbar__overlay-menu">
            {moreMenuItems.map((item) => (
              <li key={item.name}>
                {item.name === "Contacts" ? (
                  <span onClick={handleContactsClick}>
                    {item.name.toUpperCase()}
                  </span>
                ) : (
                  <Link
                    href={`/${item.link}`}
                    onClick={() => setMoreMenuOpen(false)}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* 👇 добавь сюда блок социальных иконок */}
          <div className="navbar__overlay-socials">
            <a
              href="https://instagram.com/eddy_community"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icons/instanavbar.svg" alt="Instagram" />
            </a>
            <a
              href="https://t.me/eddy_community"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/icons/teleganav.svg" alt="Telegram" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
