"use client";

import Image from "next/image";
import Link from "next/link";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="footer__nav">
          <li>
            <Link href="/Legal-info">Legal Information</Link>
          </li>
          {/* <li>
            <Link href="#">Water safety rules</Link>
          </li> */}
          <li>
            <Link href="#">Corporate Adventures</Link>
          </li>
          <li>
            <Link href="#">Market</Link>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault(); // предотвращаем переход к началу страницы
                document
                  .querySelector("footer")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contacts
            </a>
          </li>
        </ul>
        <div className="footer__socials">
          <Link
            href="https://www.facebook.com/share/1ANAhvYso1/?mibextid=wwXIfr"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/FB.svg"
              alt="Facebook"
              width={100}
              height={40}
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
              width={100}
              height={40}
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
              width={100}
              height={40}
            />
          </Link>
          <Link
            href="https://www.tripadvisor.com/Attraction_Review-g304074-d12877654-Reviews-SUP_Kayaking_Tours-Budva_Budva_Municipality.html"
            aria-label="TripAdvisor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/tripadvisor.svg"
              alt="TripAdvisor"
              width={100}
              height={40}
            />
          </Link>
          {/* <div id="TA_socialButtonIcon609" className="TA_socialButtonIcon">
            <ul id="e6QNep" className="TA_links QUJQLoS6Lhib">
              <li id="GCbsz8dy" className="aY6w7RAqiX">
                <a
                  target="_blank"
                  href="https://www.tripadvisor.com/Attraction_Review-g304074-d12877654-Reviews-SUP_Kayaking_Tours-Budva_Budva_Municipality.html"
                >
                  <img src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_logomark.svg" />
                </a>
              </li>
            </ul>
          </div>
          <script
            async
            src="https://www.jscache.com/wejs?wtype=socialButtonIcon&amp;uniq=609&amp;locationId=12877654&amp;color=green&amp;size=med&amp;lang=en_US&amp;display_version=2"
            data-loadtrk
            // onLoad="this.loadtrk=true"
          ></script> */}
        </div>

        <div className="footer__logo">
          <Image
            src="/images/icons/logo-footer.svg"
            alt="EDDY logo"
            width={120}
            height={92}
          />
        </div>

        <div className="footer__copy">
          <p>© 2025 EDDY. All Rights Reserved.</p>
          <Link href="#">Personal data processing policy</Link>
          <Link href="#">Terms and Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
