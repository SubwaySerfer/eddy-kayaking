"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";
import { locations } from "@/app/constants";
import { useWindowSize } from "react-use";

const Header = ({
  selectedLocation,
  setSelectedLocation,
}: {
  selectedLocation: "budva" | "skadar";
  setSelectedLocation: (location: "budva" | "skadar") => void;
}) => {
  const { width } = useWindowSize();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menu, setMenu] = useState(false);

  const handleLocationChange = (id: string) => {
    if (id === "budva" || id === "skadar") {
      setSelectedLocation(id as "budva" | "skadar");
    }
    setDropdownOpen(false);

    // Безопасно, потому что вызывается только при клике (на клиенте)
    if (typeof window !== "undefined") {
      document.querySelector("footer")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.customDropdown}`)) {
        setDropdownOpen(false);
      }
    };

    setMenu(() => width > 426);

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldHide = scrollY > 375;
      const shouldHideMenu = scrollY > 375 || width < 426;

      const logoEl = document.querySelector("#logo");
      const menuEl = document.querySelector("#mainMenu");

      if (logoEl instanceof HTMLElement)
        logoEl.style.display = shouldHide ? "none" : "flex";

      if (menuEl instanceof HTMLElement)
        menuEl.style.display = shouldHideMenu ? "none" : "flex";
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${styles.container}`}>
      <div>
        <div className={styles.header__wrapper} id="header__logo-link">
          <Link href="/" id="logo">
            <Image
              src="/images/icons/logo_def_L.svg"
              alt="EDDY Logo"
              width={372}
              height={268}
              priority
            />
          </Link>

          <div className={styles.header__bottom}>
            {menu && (
              <nav className={styles.mainNav} id="mainMenu">
                <ul className={styles.mainNav__list}>
                  <li className={styles.mainNav__item}>
                    <Link href="/adventures" className={styles.mainNav__link}>
                      Adventures
                    </Link>
                  </li>
                  <li className={styles.mainNav__item}>
                    <Link href="/rentals" className={styles.mainNav__link}>
                      Rental
                    </Link>
                  </li>
                  <li className={styles.mainNav__item}>
                    <Link href="/sea-kayaking" className={styles.mainNav__link}>
                      Sea kayaking
                    </Link>
                  </li>
                  <li className={styles.mainNav__item}>
                    <Link href="/market" className={styles.mainNav__link}>
                      Market
                    </Link>
                  </li>
                  <li className={styles.mainNav__item}>
                    <Link
                      href="/gift-certificates"
                      className={styles.mainNav__link}
                    >
                      Gift Certificates
                    </Link>
                  </li>
                  <li className={styles.mainNav__item}>
                    <Link href="/journal" className={styles.mainNav__link}>
                      Journal
                    </Link>
                  </li>
                  <li className={styles.mainNav__item}>
                    <Link
                      href="/"
                      className={styles.mainNav__link}
                      onClick={() =>
                        document
                          .querySelector("footer")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                    >
                      Contacts
                    </Link>
                  </li>
                  <li className={styles.mainNav__item}>
                    <div className={styles.headerlocation}>
                      <img
                        src="/images/icons/tabIcon.svg"
                        alt="location"
                        style={{ height: "22px" }}
                      />
                      <div className={styles.customDropdown}>
                        <div
                          className={styles.dropdownTrigger}
                          onClick={() => setDropdownOpen(!dropdownOpen)}
                          style={{
                            paddingLeft: "15px",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <span style={{ fontSize: "20px" }}>
                            {selectedLocation
                              ? selectedLocation.toUpperCase()
                              : "BUDVA"}
                          </span>
                          <span style={{ marginLeft: "6px", fontSize: "15px" }}>
                            <img src="/images/icons/arrow-dwn.svg" alt="arrow down." />
                          </span>
                        </div>
                        {dropdownOpen && (
                          <div className={styles.dropdownMenu}>
                            {locations.map((loc) => (
                              <div
                                key={loc.id}
                                className={styles.dropdownOption}
                                onClick={() => handleLocationChange(loc.id)}
                              >
                                {loc.label}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
