import React from 'react';

import './_LoanSign.scss';
import { FileDockDuotone } from '../../../../common/assets/icon/moduleIcon';
import MessageApplication from '../Message/MessageApplication';


const LoanSign = () => (
  <>
    <MessageApplication />
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
      <a download className="loan-sign__download" href="/#"> <FileDockDuotone className="loan-sign__icon" />
        Information on your card
      </a>
      <div className="loan-sign__agree">
        <input
          required
          type="checkbox"
          id="agreeInputCheckbox"
          className="loan-sign__input"
        />
        <label htmlFor="agreeInputCheckbox" className="loan-sign__label">I agree</label>
        <button type="button" className="loan-sign__button">Send</button>
      </div>
    </div>
  </>
);

export default LoanSign;
