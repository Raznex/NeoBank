import React from 'react';
import './_Rate.scss';
import burse from '../../../../../common/assets/icon/burse.svg';

const Rate: React.FC = () => {
  return (
    <section className="rate">
      <div className="rate__info">
        <h2 className="rate__title">Exchange rate in&nbsp;internet bank</h2>
        <p className="rate__name">Currency</p>
        <div className="rate__container">
          <p className="rate__currency">USD: <span className="rate__currency rate__currency_span" id="rateUSD">60.78</span></p>
          <p className="rate__currency">EUR: <span className="rate__currency rate__currency_span" id="rateEUR">9.08</span></p>
          <p className="rate__currency">SGD: <span className="rate__currency rate__currency_span" id="rateSGD">64.78</span></p>
          <p className="rate__currency">JPY: <span className="rate__currency rate__currency_span" id="rateJPY">60.78</span></p>
          <p className="rate__currency">CAD: <span className="rate__currency rate__currency_span" id="rateCAD">0.46</span></p>
          <p className="rate__currency">NZD: <span className="rate__currency rate__currency_span" id="rateNZD">3.39</span></p>
        </div>
        <a href="/#" target="_blank" className="rate__link">All courses</a>
      </div>
      <div className="rate__renewal">
        <p className="rate__time">Update every 15&nbsp;minutes, MSC&nbsp;09.08.2022</p>
        <img src={burse} alt="" className="rate__exchange" />
      </div>
    </section>
  );
};

export default Rate;
