import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';

import './_LoanDocument.scss';
import DenyPopup from '../DenyPopup/DenyPopup';
import MessageApplication from '../Message/MessageApplication';
import LoanTableSort from './LoanTable/LoanTableSort';


const LoanDocument = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(true);
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClickCheckBox = () => {
    if (isCheckboxClicked === false) {
      setIsCheckboxClicked(true);
    } else {
      setIsCheckboxClicked(false);
    }
    console.log(isCheckboxClicked);
  };

  return (
    <>
      { /* <MessageApplication /> */ }
      <div className="document">
        <div className="document__lid">
          <h2 className="document__title">Payment Schedule</h2>
          <p className="document__steps">Step 3&nbsp;of&nbsp;5</p>
        </div>
        <div className="document__table">
          <LoanTableSort />
        </div>
        <div className="document__buttons">
          <button type="button" className="document__button" onClick={ openPopup }>Deny</button>
          <div className="document__agree">
            <input
              type="checkbox"
              id="checkboxAgree"
              className="document__input"
              onChange={ handleClickCheckBox }
            />
            <label htmlFor="checkboxAgree" className="document__label">I agree with the payment schedule</label>
            <button
              disabled={ !isCheckboxClicked }
              type="button"
              className={ `document__button ${!isCheckboxClicked ? 'document__button_send' : 'document__button_disabled'}` }
            >Send
            </button>
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
