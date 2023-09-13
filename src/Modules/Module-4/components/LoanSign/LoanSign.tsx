import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './_LoanSign.scss';
import { FileDockDuotone } from '../../../../common/assets/icon/moduleIcon';
import MessageApplication from '../Message/MessageApplication';
import { useAppDispatch } from '../../utils/hooks/redux';
import { postSignUser } from '../../utils/store/Reducer/prescoringSlice';
import PageNotFound from '../../../Module-3/components/PageNotFound/PageNotFound';


const LoanSign = () => {
  const [isCheckboxClicked, setIsCheckboxClicked] = useState(true);
  const [isDocumentSigning, setIsDocumentSigning] = useState(false);
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
    if (localStorage.getItem('documentSigning')) {
      setIsDocumentSigning(true);
    }
  }, []);
  const dispatch = useAppDispatch();

  const sendSigning = () => {
    if (applicationId !== undefined) {
      dispatch(postSignUser(applicationId));
      setIsDocumentSigning(true);
      navigate('/loan/:applicationId/code');
    }
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
        { isDocumentSigning ? <MessageApplication /> : (
          <div className="loan-sign">
            <div className="loan-sign__lid">
              <h2 className="loan-sign__title">Signing of documents</h2>
              <p className="loan-sign__steps">Step 4&nbsp;of&nbsp;5</p>
            </div>
            <p className="loan-sign__info">Information on&nbsp;interest rates under bank deposit agreements with individuals.
              Center for Corporate Information Disclosure. Information of a&nbsp;professional participant in&nbsp;the
              securities market. Information about persons under whose control or&nbsp;significant influence the Partner
              Banks are. By&nbsp;leaving an&nbsp;application, you agree to&nbsp;the processing of&nbsp;personal data,
              obtaining information, obtaining access to&nbsp;a&nbsp;credit history, using an&nbsp;analogue
              of&nbsp;a&nbsp;handwritten signature, an&nbsp;offer, a&nbsp;policy regarding the processing
              of&nbsp;personal data, a&nbsp;form of&nbsp;consent to&nbsp;the processing of&nbsp;personal data.
            </p>
            <a download className="loan-sign__download" target="_blank" href="https://neostudy.neoflex.ru/pluginfile.php/108672/mod_assign/intro/credit-card-offer.pdf" rel="noreferrer"> <FileDockDuotone className="loan-sign__icon" />
              Information on your card
            </a>
            <div className="loan-sign__agree">
              <input
                required
                type="checkbox"
                id="agreeInputCheckbox"
                className="loan-sign__input"
                onChange={ handleClickCheckBox }
              />
              <label htmlFor="agreeInputCheckbox" className="loan-sign__label">I agree</label>
              <button
                type="button"
                className={ `loan-sign__button ${!isCheckboxClicked ? '' : 'loan-sign__button_disabled'}` }
                disabled={ isCheckboxClicked }
                onClick={ sendSigning }
              >Send
              </button>
            </div>
          </div>
        ) }
      </>
    )
  );
};

export default LoanSign;
