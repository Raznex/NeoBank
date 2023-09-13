import React from 'react';

import '../_LoanOffer.scss';
import surprise from '../../../../../common/assets/images/SurpriseImage 1.png';
import { CloseRoundFill, CheckFill } from '../../../../../common/assets/icon/moduleIcon';
import { Offer } from '../../../../Module-3/utils/Interface';
import { useAppDispatch } from '../../../utils/hooks/redux';
import { postSelectedOffer } from '../../../utils/store/Reducer/prescoringSlice';


interface CardOfferProps {
  offer: Offer;
}

const CardOffer: React.FC<CardOfferProps> = ({ offer }) => {
  const dispatch = useAppDispatch();
  const getSelectedOffer = () => {
    dispatch(postSelectedOffer(offer));
  };

  return (
    <article className="loan-offer__card">
      <img src={ surprise } alt="Box" className="loan-offer__image" />
      <p className="loan-offer__text">{ `Requested amount: ${offer.requestedAmount} ₽` }</p>
      <p className="loan-offer__text">{ `Total amount: ${offer.totalAmount} ₽` }</p>
      <p className="loan-offer__text">{ `For ${offer.term} months` }</p>
      <p className="loan-offer__text">{ `Monthly payment: ${offer.monthlyPayment} ₽` }</p>
      <p className="loan-offer__text">{ `Your rate: ${offer.rate}%` }</p>
      <p className="loan-offer__text">Insurance included
        { offer.isInsuranceEnabled ? <CheckFill className="loan-offer__icon" />
          : <CloseRoundFill className="loan-offer__icon" /> }
      </p>
      <p className="loan-offer__text">Salary client { offer.isSalaryClient ? <CheckFill className="loan-offer__icon" />
        : <CloseRoundFill className="loan-offer__icon" /> }
      </p>
      <button type="button" className="loan-offer__button" onClick={ getSelectedOffer }>Select</button>
    </article>
  );
};


export default CardOffer;
