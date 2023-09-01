import React from 'react';

import {
  CheckFill,
  CloseRoundFill,
} from '../../../../common/assets/icon/moduleIcon/index';
import surprise from '../../../../common/assets/images/SurpriseImage 1.png';
import './_LoanOffer.scss';


const LoanOffer = () => (
  <div className="loan-offer">
    <article className="loan-offer__card">
      <img src={ surprise } alt="Box" className="loan-offer__image" />
      <p className="loan-offer__text">Requested amount: 200&nbsp;000&nbsp;₽</p>
      <p className="loan-offer__text">Total amount: 200&nbsp;000&nbsp;₽</p>
      <p className="loan-offer__text">For 24 months</p>
      <p className="loan-offer__text">Monthly payment: 9&nbsp;697&nbsp;₽</p>
      <p className="loan-offer__text">Your rate: 15%</p>
      <p className="loan-offer__text">Insurance included <CloseRoundFill className="loan-offer__icon" /></p>
      <p className="loan-offer__text">Salary client <CloseRoundFill className="loan-offer__icon" /></p>
      <button type="button" className="loan-offer__button">Select</button>
    </article>
    <article className="loan-offer__card">
      <img src={ surprise } alt="Box" className="loan-offer__image" />
      <p className="loan-offer__text">Requested amount: 200&nbsp;000&nbsp;₽</p>
      <p className="loan-offer__text">Total amount: 200&nbsp;000&nbsp;₽</p>
      <p className="loan-offer__text">For 24 months</p>
      <p className="loan-offer__text">Monthly payment: 9&nbsp;788&nbsp;₽</p>
      <p className="loan-offer__text">Your rate: 11%</p>
      <p className="loan-offer__text">Insurance included <CheckFill className="loan-offer__icon" /></p>
      <p className="loan-offer__text">Salary client <CloseRoundFill className="loan-offer__icon" /></p>
      <button type="button" className="loan-offer__button">Select</button>
    </article>
    <article className="loan-offer__card">
      <img src={ surprise } alt="Box" className="loan-offer__image" />
      <p className="loan-offer__text">Requested amount: 200&nbsp;000&nbsp;₽</p>
      <p className="loan-offer__text">Total amount: 200&nbsp;000&nbsp;₽</p>
      <p className="loan-offer__text">For 24 months</p>
      <p className="loan-offer__text">Monthly payment: 9&nbsp;603&nbsp;₽</p>
      <p className="loan-offer__text">Your rate: 14%</p>
      <p className="loan-offer__text">Insurance included <CloseRoundFill className="loan-offer__icon" /></p>
      <p className="loan-offer__text">Salary client <CheckFill className="loan-offer__icon" /></p>
      <button type="button" className="loan-offer__button">Select</button>
    </article>
    <article className="loan-offer__card">
      <img src={ surprise } alt="Box" className="loan-offer__image" />
      <p className="loan-offer__text">Requested amount: 200&nbsp;000&nbsp;₽</p>
      <p className="loan-offer__text">Total amount: 200&nbsp;000&nbsp;₽</p>
      <p className="loan-offer__text">For 24 months</p>
      <p className="loan-offer__text">Monthly payment: 9&nbsp;690&nbsp;₽</p>
      <p className="loan-offer__text">Your rate: 10%</p>
      <p className="loan-offer__text">Insurance included <CheckFill className="loan-offer__icon" /></p>
      <p className="loan-offer__text">Salary client <CheckFill className="loan-offer__icon" /></p>
      <button type="button" className="loan-offer__button">Select</button>
    </article>
  </div>
);

export default LoanOffer;
