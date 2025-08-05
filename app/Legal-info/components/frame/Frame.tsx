import React from "react";
import styles from "./frameHStyle.module.scss";

const sections = [
  "Introduce",
  "1. Contracting Parties",
  "2. Scope of Services",
  "3. Incorporation of Policies",
  "4. Booking & Payment",
  "5. Cancellation & Amendment Policy",
  "6. Weather & Sea-State Disclaimer",
  "7. Health, Safety & Risk Assumption",
  "8. Liability Waiver",
  "9. Insurance & Liability",
  "10. Equipment Use & Security Deposit",
  "11. Customer Obligations",
  "12. Guide Authority & Expedition Protocol",
  "13. Environmental & Sustainability Commitments",
  "14. Code of Conduct & Harassment Policy",
  "15. Gift Vouchers & Promo Codes",
  "16. Photo, Video & Drone Policy",
  "17. Intellectual Property",
  "18. Data Protection (GDPR Notice)",
  "19. Third-Party Marketplaces & Sub-Contractors",
  "20. Package Travel & Linked Arrangements",
  "21. Modern Slavery & Supplier Code",
  "22. Cybersecurity",
  "23. Lost & Found",
  "24. Complaints & Dispute Resolution",
  "25. Change of Control",
  "26. Severability & Survival",
  "27. Language of Communication",
  "28. Updates to These Terms",
];

export const Frame = () => {
  return (
    <div className="flex flex-col items-start gap-6 w-full">
      <div className={`text-2xl font-bold ${styles.tableOfCon}`}>
        Table of Contents
      </div>

      <div className="flex flex-col gap-4 w-full">
        {sections.map((title, index) => (
          <a
            key={index}
            href={`#section-${index}`}
            className={`text-lg underline text-black hover:text-blue-700 transition ${styles.linkF}`}
          >
            {title}
          </a>
        ))}
      </div>
    </div>
  );
};
