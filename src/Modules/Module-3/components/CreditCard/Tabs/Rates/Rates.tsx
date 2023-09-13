import React from 'react';

import './_Rates.scss';


const Rates = () => (
  <ul className="rates">
    <li className="rates__string">
      <p className="rates__title">Card currency</p>
      <p className="rates__description">Rubles, dollars, euro</p>
    </li>
    <li className="rates__string">
      <p className="rates__title">Interest free period</p>
      <p className="rates__description">0%&nbsp;up&nbsp;to&nbsp;160 days</p>
    </li>
    <li className="rates__string">
      <p className="rates__title">Payment system</p>
      <p className="rates__description">Mastercard, Visa</p>
    </li>
    <li className="rates__string">
      <p className="rates__title">Maximum credit limit on&nbsp;the card</p>
      <p className="rates__description">600&nbsp;000&nbsp;₽</p>
    </li>
    <li className="rates__string">
      <p className="rates__title">Replenishment and withdrawal</p>
      <p className="rates__description">At&nbsp;any ATM. Top up&nbsp;your credit card for free with cash or&nbsp;transfer from other cards</p>
    </li>
    <li className="rates__string">
      <p className="rates__title">Max cashback per month</p>
      <p className="rates__description">15&nbsp;000&nbsp;₽</p>
    </li>
    <li className="rates__string">
      <p className="rates__title">Transaction Alert</p>
      <p className="rates__description">60&nbsp;₽&nbsp;&mdash; SMS or&nbsp;push notifications<br />
        0&nbsp;₽&nbsp;&mdash; card statement, information about transactions in&nbsp;the online bank
      </p>
    </li>

  </ul>
);

export default Rates;
