import React from 'react';
import './RentalsHeader.scss';

const RentalHeader: React.FC = () => {
  return (
    <header className="rentalsHeader">
      <div className='rentalsHeader__bg' />
      <div className="rentalsHeader__svg rentalsHeader__svg--top">
        <svg xmlns="http://www.w3.org/2000/svg" width="741" height="593" viewBox="0 0 741 593" fill="none">
          <path d="M273.735 478.4C87.7359 372.827 40.1509 184.403 53.1705 107.921C72.3391 -53.5364 274.363 -192.965 483.721 -202.958C613.5 -209.152 617.206 -252.492 616.751 -264.094C615.664 -291.937 567.956 -353.736 331.111 -266.692C294 -254.653 197.818 -210.039 109.939 -127.893C0.0889782 -25.2102 -98.2658 214.003 185.567 442.436C344.689 570.5 639.7 601.376 740.283 590.883C660.232 591.716 433.165 577.013 273.735 478.4Z" fill="#FFF" />
        </svg>
      </div>

      <div className="rentalsHeader__content">
        <h1 className="rentalsHeader__title">RENTAL</h1>
      </div>

      <div className="rentalsHeader__svg rentalsHeader__svg--bottom">
        <svg xmlns="http://www.w3.org/2000/svg" width="855" height="497" viewBox="0 0 855 497" fill="none">
          <path d="M824.299 -4.47047C785.372 -76.9866 707.077 -141.146 666.529 -156.017C765.318 -81.3632 787.686 -20.3065 794.07 35.8934C802.18 107.416 780.802 178.939 738.777 239.843C696.755 300.743 592.065 404.843 379.738 456.537C209.878 497.894 54.8513 451.112 0.0581055 423.255C37.657 452.996 135.711 479.907 209.436 489.822C283.943 499.834 385.637 500.444 501.386 472.826C617.132 445.207 753.522 365.185 807.342 273.833C861.162 182.48 872.957 86.1718 824.299 -4.47047Z" fill="#FFF" />
        </svg>
      </div>
    </header>
  );
};

export default RentalHeader;
