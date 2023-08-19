import React from 'react';
import '../_Rate.scss';

interface RateProps {
  currency: any;
}

const RateCurrency:React.FC <RateProps>= ({currency}) => {
  return (
      <p className="rate__currency">{currency.currency}: <span className="rate__currency rate__currency_span" id="rateUSD">{currency.value}</span></p>
  );
};

export default RateCurrency;
