import React from 'react';

import './_DenyPopup.scss';


interface IPopup {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const DenyPopup: React.FC<IPopup> = ({ isOpen, setIsOpen }) => {
  const closePopup = () => {
    setIsOpen(false);
  };
  return (
    <div className={ `popup ${isOpen ? 'popup_is-open' : ''}` }>
      <div className="popup__container">
        <div className="popup__up">
          <h2 className="popup__title">Deny application</h2>
          <button type="button" className="popup__close" onClick={ closePopup } />
        </div>
        <p className="popup__text">You exactly sure, you want to cancel this application?
        </p>
        <div className="popup__buttons">
          <button type="button" className="popup__button">Deny</button>
          <button type="button" className="popup__button popup__button_cancel" onClick={ closePopup }>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default DenyPopup;
