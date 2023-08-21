import React from 'react';
import './_Rate.scss';
import {Burse} from '../../../../../common/assets/icon/moduleIcon/index'
import RateCurrency from "./RateCurrency/RateCurrency";
import PreloaderToCurrency from "../../Preloader/PreloaderToCurrency/PreloaderToCurrency";

interface RateProps {
  currency: any;
  isLoading: boolean;
}

const Rate: React.FC<RateProps> = ({currency, isLoading}) => {
  return (
    <section className="rate">
      <div className="rate__info">
        <h2 className="rate__title">Exchange rate in&nbsp;internet bank</h2>
        <p className="rate__name">Currency</p>
        {isLoading ? (
          <PreloaderToCurrency/>
        ) : (
          <div className="rate__container">
            {currency?.map((currency: any) => (
              <RateCurrency currency={currency} key={currency.currency}/>
            ))}
          </div>
        )}
        <a href="/#" target="_blank" className="rate__link">All courses</a>
      </div>
      <div className="rate__renewal">
        <p className="rate__time">Update every 15&nbsp;minutes, MSC&nbsp;09.08.2022</p>
        <Burse className="rate__exchange"/>
      </div>
    </section>
  );
};

export default Rate;
