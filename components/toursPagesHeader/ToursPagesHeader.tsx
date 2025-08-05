"use client";
import "./ToursPageHeader.scss";
import { useWindowSize } from "react-use";

const ToursPagesHeader = ({
  title,
  description,
  imageDesktop,
  imageMobile,
  mobileTagline,
  buttonText = "Buy now",
}: any) => {
  const { width } = useWindowSize();

  return (
    <div>
      {/* Mobile Image Block */}
      {width < 425 && (
        <div>
          <img
            src={imageMobile}
            alt="Mobile Header"
            className="w-full h-[765px] object-cover"
          />
          {mobileTagline && (
            <div className="mobileTagline">{mobileTagline}</div>
          )}
        </div>
      )}

      <div className="flex h-[784px]">
        {/* Content Block */}
        <div className="bg-gray-100 text-center md:text-center contentBlock">
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
          <button className="mt-6 px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-900 transition w-[240px] btn">
            {buttonText}
          </button>
        </div>

        {/* Desktop Image Block */}
        <div className="hidden md:block w-[50vw]">
          <img
            src={imageDesktop}
            alt="Desktop Header"
            className="h-auto object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ToursPagesHeader;
