import React from 'react';
import './_Cashback.scss'

const Cashback = () => {
  return (
    <div className="cashback">
      <article className="cashback__container">
        <p className="cashback__title">For food delivery, cafes and restaurants</p>
        <p className="cashback__percent">5%</p>
      </article>
      <article className="cashback__container cashback__container_dark">
        <p className="cashback__title">In&nbsp;supermarkets with our subscription</p>
        <p className="cashback__percent">5%</p>
      </article>
      <article className="cashback__container">
        <p className="cashback__title">In&nbsp;clothing stores and children&rsquo;s goods</p>
        <p className="cashback__percent">2%</p>
      </article>
      <article className="cashback__container cashback__container_dark">
        <p className="cashback__title">Other purchases and payment of&nbsp;services and
          fines</p>
        <p className="cashback__percent">1%</p>
      </article>
      <article className="cashback__container">
        <p className="cashback__title">Shopping in&nbsp;online stores</p>
        <p className="cashback__percent">up to 3%</p>
      </article>
      <article className="cashback__container cashback__container_dark">
        <p className="cashback__title">Purchases from our partners</p>
        <p className="cashback__percent">30%</p>
      </article>
    </div>
  );
};

export default Cashback;
