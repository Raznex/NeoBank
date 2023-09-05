import React, { useState } from 'react';

import './_LoanDocument.scss';
import DenyPopup from '../DenyPopup/DenyPopup';


const LoanDocument = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  return (
    <>
      { /* <MessageApplication /> */ }
      <div className="document">
        <div className="document__lid">
          <h2 className="document__title">Payment Schedule</h2>
          <p className="document__steps">Step 3&nbsp;of&nbsp;5</p>
        </div>
        <table className="document__table">
          <p className="ti">t</p>
        </table>
        <div className="document__buttons">
          <button type="button" className="document__button" onClick={ openPopup }>Deny</button>
          <div className="document__agree">
            <input type="checkbox" id="checkboxAgree" className="document__input" />
            <label htmlFor="checkboxAgree" className="document__label">I agree with the payment schedule</label>
            <button type="button" className="document__button document__button_send">Send</button>
          </div>
        </div>
      </div>
      <DenyPopup
        isOpen={ isPopupOpen }
        setIsOpen={ setIsPopupOpen }
      />
    </>
  );
};

export default LoanDocument;
