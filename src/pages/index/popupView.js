import React, { useState } from 'react';
import { LiaTimesSolid } from 'react-icons/lia';
import PopImage from '../../assets/images/homepage/popup.jpg';

const PopupImage = () => {
  const [displayPopup, setDisplayPopup] = useState(true);

  const handleClose = () => {
    setDisplayPopup(false);
  };

  return (
    displayPopup && (
      <div
        className="cookie-popup fixed max-w-[720px] inset-x-0 mx-auto bg-transparent rounded-md py-2 px-8 z-50 flex flex-col items-center"
        style={{
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <img
          src={PopImage}
          alt="Cookie Notification"
          className=""
          style={{ maxWidth: '100%', maxHeight: '100%' }}
        />
        <div className="cookie-popup-actions text-center mt-4">
          <div className="cookie-popup-actions text-end">
            <button onClick={handleClose} className="absolute border-none bg-none p-0 cursor-pointer font-semibold top-2 end-2">
              <LiaTimesSolid className="text-dark dark:text-slate-200 text-xl" />
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupImage;
