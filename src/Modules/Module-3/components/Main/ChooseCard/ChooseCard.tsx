import React from 'react';

import './_ChooseCard.scss';
import card1 from '../../../../../common/assets/images/cardImage1 1.png';
import card2 from '../../../../../common/assets/images/cardImage2 1.png';
import card3 from '../../../../../common/assets/images/cardImage3 1.png';
import card4 from '../../../../../common/assets/images/cardImage4 1.png';


const ChooseCard: React.FC = () => (
  <section className="choose-card">
    <div className="choose-card__description">
      <h1 className="choose-card__title">Choose the design you like and apply for card right now</h1>
      <button type="button" className="choose-card__button">Choose the card</button>
    </div>
    <div className="choose-card__container">
      <img src={ card1 } alt="bank-card" className="choose-card__card" />
      <img src={ card2 } alt="bank-card" className="choose-card__card" />
      <img src={ card3 } alt="bank-card" className="choose-card__card" />
      <img src={ card4 } alt="bank-card" className="choose-card__card" />
    </div>
  </section>
);

export default ChooseCard;
