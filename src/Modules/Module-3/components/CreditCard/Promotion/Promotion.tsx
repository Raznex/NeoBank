import React from 'react';

import card from '../../../../../common/assets/images/cardImage1 1.png';
import './_Promotion.scss';


const Promotion = () => {
  const offers = localStorage.getItem('offers') || 'null';
  const offerTakes = localStorage.getItem('offerTakes') || 'null';
  return (
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
        { offers ? (
          <button type="button" className={ offerTakes ? 'promotion__button_hidden' : 'promotion__button' }>Choose an offer
          </button>
        ) : (
          <button type="button" className={ offerTakes ? 'promotion__button_hidden' : 'promotion__button' }>Apply for card
          </button>
        ) }
        <button type="button" className={ offerTakes ? 'promotion__button promotion__button_continue' : 'promotion__button_hidden' }>Continue
          registration
        </button>
      </div>
      <img src={ card } alt="card" className="promotion__image" />
    </section>
  );
};

export default Promotion;
