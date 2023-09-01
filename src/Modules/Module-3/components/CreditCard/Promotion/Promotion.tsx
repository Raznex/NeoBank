import React from 'react';

import card from '../../../../../common/assets/images/cardImage1 1.png';
import './_Promotion.scss';


const Promotion: React.FC = () => (
  <section className="promotion">
    <div className="promotion__container">
      <h2 className="promotion__title">Platinum digital credit&nbsp;card</h2>
      <p className="promotion__description">Our best credit card. Suitable for everyday spending and shopping.
        Cash withdrawals and transfers without commission and interest.
      </p>
      <ul className="promotion__conditions">
        <li className="promotion__list">
          <p className="promotion__offer">Up to 160&nbsp;days</p>
          <p className="promotion__text">No percent</p>
          <p className="promotion__hover-text">When repaying the full
            debt up&nbsp;to&nbsp;160&nbsp;days.
          </p>
        </li>
        <li className="promotion__list">
          <p className="promotion__offer">Up to 600&nbsp;000&nbsp;₽</p>
          <p className="promotion__text">Credit limit</p>
          <p className="promotion__hover-text">Over the limit willaccrue percent</p>
        </li>
        <li className="promotion__list">
          <p className="promotion__offer">0&nbsp;₽</p>
          <p className="promotion__text">Card service is&nbsp;free</p>
          <p className="promotion__hover-text">Promotion valid until December&nbsp;31, 2022.</p>
        </li>
      </ul>
      <button type="button" className="promotion__button">Apply for card</button>
    </div>
    <img src={ card } alt="card" className="promotion__image" />
  </section>
);

export default Promotion;
