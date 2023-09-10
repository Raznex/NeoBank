import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './_LoanDocument.scss';
import DenyPopup from '../DenyPopup/DenyPopup';
import MessageApplication from '../Message/MessageApplication';
import LoanTableSort from './LoanTable/LoanTableSort';
import { useAppDispatch } from '../../utils/hooks/redux';
import { postCreateDocument } from '../../utils/store/Reducer/prescoringSlice';
import PageNotFound from '../../../Module-3/components/PageNotFound/PageNotFound';


const LoanDocument = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(true);
  const [isDocumentCreated, setIsDocumentCreated] = useState(false);

  const [isId, setIsId] = useState(false);
  const { applicationId } = useParams();
  const offers = localStorage.getItem('offers') || null;
  const offersData = offers ? JSON.parse(offers) : null;
  const applicationNum = Number(applicationId);
  const navigate = useNavigate();

  useEffect(() => {
    if (offers !== null) {
      if (offersData[0].applicationId === applicationNum) {
        setIsId(true);
      }
    } else {
      navigate('/loan');
    }
  }, [window.onload]);

  useEffect(() => {
    if (localStorage.getItem('documentCreated')) {
      setIsDocumentCreated(true);
    }
  }, []);

  const dispatch = useAppDispatch();

  const submitDocument = () => {
    if (applicationId !== undefined) {
      dispatch(postCreateDocument(applicationId));
    }
  };
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClickCheckBox = () => {
    if (isCheckboxClicked === false) {
      setIsCheckboxClicked(true);
    } else {
      setIsCheckboxClicked(false);
    }
  };

  return (
    !isId ? <PageNotFound /> : (
      <>
        { isDocumentCreated ? <MessageApplication /> : (
          <>
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
                    disabled={ isCheckboxClicked }
                    type="button"
                    className={ `document__button ${!isCheckboxClicked ? 'document__button_send' : 'document__button_disabled'}` }
                    onClick={ submitDocument }
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
        ) }
      </>
    )
  );
};

export default LoanDocument;
