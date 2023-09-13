import React from 'react';

import '../_Rate.scss';
import { CurrencyData } from '../../../../utils/Interface';


interface RateProps {
  curr: CurrencyData;
}

const RateCurrency: React.FC <RateProps> = ({ curr }) => (
  <p className="rate__currency">{ curr.currency }: <span className="rate__currency rate__currency_span" id="rateUSD">{ curr.value }</span></p>
);

export default RateCurrency;
