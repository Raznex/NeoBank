import React from 'react';

import './_LoanOffer.scss';
import { Offer } from '../../../Module-3/utils/Interface';
import CardOffer from './CardOffer/CardOffer';
import { useAppSelector } from '../../utils/hooks/redux';
import PreloaderToCards from '../../../Module-3/components/Preloader/PreloaderToCards/PreloaderToCards';


interface LoanOffersProps {
  offers: Offer[];
}

const LoanOffer: React.FC<LoanOffersProps> = ({ offers }) => {
  const { isLoading, selectedOffer } = useAppSelector((state) => state.prescoringSlice);

  return (
    isLoading ? <PreloaderToCards /> : (
      <>
        { selectedOffer
          ? (
            <div className="loan-offer__success">
              <p className="loan-offer__text-email">The preliminary decision has been sent to your email.</p>
              <p className="loan-offer__subtext-email">In&nbsp;the letter you can get acquainted with
                the preliminary decision on&nbsp;the credit card.
              </p>
            </div>
          ) : (
            <div className="loan-offer">
              { offers.map((offer) => <CardOffer key={ offer.monthlyPayment } offer={ offer } />) }
            </div>
          ) }
      </>
    )
  );
};

export default LoanOffer;
