import React from "react";
import styles from "./frameStyle.module.scss";

const sections = [
  {
    id: "section-0",
    title: "Introduction",
    content: `These Terms and Conditions ("Terms") apply to all bookings, rentals, purchases, and visits made through eddyletspaddle.com (“Website”).`,
  },
  {
    id: "section-1",
    title: "1. Contracting Parties",
    content: `"EDDY", "we", "our", or "us" refers to AQUA SPORT BUDVA d.o.o., ul. Popa Jola Zeca br. 7, 85310 Budva, Montenegro (company reg. no. 03132005). All payments, logistics, and liabilities are handled by AQUA SPORT BUDVA d.o.o., represented online and offline by the brand “EDDY”.`,
  },
  {
    id: "section-2",
    title: "2. Scope of Services",
    content: `We offer guided tours, self-guided rentals, lessons, and associated merchandise relating to stand‑up paddleboarding (SUP) and kayaking. Activities are conducted in Montenegro, primarily around Budva, Skadar Lake, and nearby coastal regions. Online services include booking, payment processing, newsletter subscriptions, and gift voucher issuance.`,
  },
  {
    id: "section-3",
    title: "3. Incorporation of Policies",
    content: `These Terms incorporate by reference our Privacy Policy, Cookie Policy, Sustainability Statement, and Accessibility Statement, all available at eddyletspaddle.com.`,
  },
  {
    id: "section-4",
    title: "4. Booking & Payment",
    content: `A booking is confirmed only after full payment is received or an agreed deposit is recorded. Prices include VAT where applicable. Currency conversions shown are indicative; your card issuer may apply different rates or fees. You must be ≥ 18 years old (or accompanied by a legal guardian) to make a booking. For group bookings, the person completing the checkout acts as agent for all participants and accepts these Terms on their behalf.`,
  },
  {
    id: "section-5",
    title: "5. Cancellation & Amendment Policy",
    content: `Date changes are free ≥24h before the start, subject to availability. We reserve the right to cancel or modify an Activity due to unsafe weather (wind ≥ 15 kn, waves > 1 m, lightning), epidemics, force majeure, or government restriction. You will be offered: (a) a new date, (b) a voucher valid 12 months, or (c) a full refund, at your choice. For rentals, in case of unsafe conditions, guests may rebook or receive a voucher valid for 12 months.`,
  },
  {
    id: "section-6",
    title: "6. Weather & Sea-State Disclaimer",
    content: `Trip leaders have final authority on safety. You agree to changes or early termination of an Activity with full compensation if conditions deteriorate.`,
  },
  {
    id: "section-7",
    title: "7. Health, Safety & Risk Assumption",
    content: `Water sports involve inherent risks (capsize, injury, hypothermia). By participating, you acknowledge these hazards and agree to follow staff instructions, wear provided buoyancy aids, and be in suitable health. You must attend a mandatory safety briefing. You certify that you can swim at least 50 m unaided. There is zero tolerance for alcohol ≥ 0.02% BAC or drug influence; random breath testing may occur. Parents/guardians are fully responsible for minors. Personal belongings remain your responsibility. Lockers may be available without warranty. Medical conditions must be disclosed; sensitive data is processed under GDPR Art. 9(2)(a).`,
  },
  {
    id: "section-8",
    title: "8. Liability Waiver",
    content: `To participate in our Activities, clients may be asked to sign a liability waiver form (digitally or in person) acknowledging the inherent risks. Refusal may result in denial of participation without refund.`,
  },
  {
    id: "section-9",
    title: "9. Insurance & Liability",
    content: `We carry public‑liability insurance as required by Montenegrin law. To the maximum extent permitted, our liability is limited to the amount you paid for the Activity. We are not responsible for indirect or consequential losses (lost flights, accommodation, etc.). Nothing in these Terms limits liability for death or personal injury caused by our proven negligence.`,
  },
  {
    id: "section-10",
    title: "10. Equipment Use & Security Deposit",
    content: `Standard wear is included; deliberate or negligent damage will be charged at cost. A refundable security deposit or photo ID may be required; card holds up to €300 are released within 7 days. Unreturned items are charged at retail value after 24 h. Customers transporting boards assume transit risk and must follow provided instructions.`,
  },
  {
    id: "section-11",
    title: "11. Customer Obligations",
    content: `Arrive at least 10 minutes before start time. Late arrival = no-show. Respect local wildlife, residents, and fellow water users. Follow Leave-No-Trace principles.`,
  },
  {
    id: "section-12",
    title: "12. Guide Authority & Expedition Protocol",
    content: `On multi-day trips, expedition leader decisions (navigation, safety, evacuation, or participant exclusion) are final. Participants are not permitted to separate from the group or deviate from the planned route without guide approval.`,
  },
  {
    id: "section-13",
    title: "13. Environmental & Sustainability Commitments",
    content: `No single‑use plastics on tours. Reef‑safe sunscreen mandatory. Leave‑No‑Trace principles. Carbon‑offsets purchased for vehicle shuttles; guests may add optional offsets at checkout.`,
  },
  {
    id: "section-14",
    title: "14. Code of Conduct & Harassment Policy",
    content: `Discrimination, harassment, or unsafe behaviour towards staff, wildlife, or other guests results in immediate removal without refund. Examples include verbal abuse, unsafe paddling, or refusal to follow guide instructions.`,
  },
  {
    id: "section-15",
    title: "15. Gift Vouchers & Promo Codes",
    content: `Valid for 12 months unless stated otherwise. Non‑refundable, but transferable with prior written notice. Only one promo code may be applied per transaction.`,
  },
  {
    id: "section-16",
    title: "16. Photo, Video & Drone Policy",
    content: `Guides may film for safety and marketing; you can opt‑out at check‑in. Separate parental release for minors. Personal drone use is subject to Montenegrin CAA regulations; maintain ≥30 m distance from people and animals.`,
  },
  {
    id: "section-17",
    title: "17. Intellectual Property",
    content: `All content on the Website (text, photos, designs) belongs to AQUA SPORT BUDVA d.o.o. or licensed parties. Reproduction without written consent is prohibited. By tagging #eddyletspaddle, you grant a worldwide, royalty‑free licence to repost. DMCA‑style take‑down requests: info@eddyletspaddle.com`,
  },
  {
    id: "section-18",
    title: "18. Data Protection (GDPR Notice)",
    content: `Controller: AQUA SPORT BUDVA d.o.o., ul. Popa Jola Zeca br. 7, 85310 Budva, Montenegro; email: info@eddyletspaddle.com. Purpose & Legal Bases: Contract performance (Art. 6 (1)(b)): processing bookings, payments, customer support. Legitimate interest (Art. 6 (1)(f)): fraud prevention, service improvements, direct marketing. Consent (Art. 6 (1)(a)): newsletter, cookies. Data: name, DOB, contact info, bookings, payments, IP address, health info. Retention: 5 years. Rights: access, correction, deletion, complaint to AZLP.`,
  },
  {
    id: "section-19",
    title: "19. Third-Party Marketplaces & Sub-Contractors",
    content: `Bookings via GetYourGuide, Viator, or hotels are subject to their payment terms. Activities remain operated by us. Freelance guides meet our training and insurance standards.`,
  },
  {
    id: "section-20",
    title: "20. Package Travel & Linked Arrangements",
    content: `If services include lodging or last over 24 h, EU Directive 2015/2302 applies. We provide insolvency protection and 24 h emergency support: +382 (69) 71-99-04.`,
  },
  {
    id: "section-21",
    title: "21. Modern Slavery & Supplier Code",
    content: `We maintain a zero-tolerance policy against forced or child labour, in line with the EU Corporate Sustainability Reporting Directive.`,
  },
  {
    id: "section-22",
    title: "22. Cybersecurity",
    content: `Bookings are encrypted (TLS 1.3). Card data is tokenized. Annual penetration tests are performed. Systems provided by Bokun and TrustMyTravel.`,
  },
  {
    id: "section-23",
    title: "23. Lost & Found",
    content: `Lost items are held for 30 days, then donated. One follow-up email will be sent. Shipping is at your expense. Items may be reclaimed in person with valid photo ID.`,
  },
  {
    id: "section-24",
    title: "24. Complaints & Dispute Resolution",
    content: `Report issues onsite immediately. Formal complaints: email info@eddyletspaddle.com within 14 days. Response within 15 working days. EU consumers may use the EU ODR platform. Governing law: Montenegro. Jurisdiction: courts of Budva.`,
  },
  {
    id: "section-25",
    title: "25. Change of Control",
    content: `In case of merger or sale, your contract and personal data may be transferred to the successor entity under GDPR safeguards.`,
  },
  {
    id: "section-26",
    title: "26. Severability & Survival",
    content: `If any clause is unenforceable, the rest remains valid. IP, liability, and data protection provisions survive termination.`,
  },
  {
    id: "section-27",
    title: "27. Language of Communication",
    content: `Our services and safety briefings are provided in English. Our guides also speak Serbian, Ukrainian, and Russian. You are responsible for ensuring you understand safety instructions and can communicate in emergencies.`,
  },
  {
    id: "section-28",
    title: "28. Updates to These Terms",
    content: `We may update these Terms at any time. The version in effect at the time of booking applies. Material changes will be announced via email to registered users at least 14 days in advance.`,
  },
];

export const FrameWrapper = () => {
  return (
    <div className="flex flex-col items-start gap-10 relative self-stretch w-full flex-[0_0_auto] mt-[60px]">
      {sections.map((section) => (
        <div
          key={section.id}
          id={section.id}
          className="flex flex-col items-start gap-6 self-stretch w-full"
        >
          <h2 className={`text-2xl font-bold text-black ${styles.titleF}`}>
            {section.title}
          </h2>
          <p
            className={`text-lg text-black leading-[28.8px] ${styles.contentF}`}
          >
            {section.content}
          </p>
        </div>
      ))}

      <div
        className={`flex flex-col items-start gap-6 pt-10 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] ${styles.updateF}`}
      >
        <p className="text-lg text-black">Last updated: July 25, 2025</p>
      </div>
    </div>
  );
};
