import React from 'react';

import surprise from '../../../../common/assets/images/SurpriseImage 1.png';
import './_Congratulation.scss';


const Congratulation = () => (
  <div className="congratulation">
    <img src={ surprise } alt="Surprise box" className="congratulation__image" />
    <h2 className="congratulation__title">Congratulations! You have completed your new credit card.</h2>
    <p className="congratulation__text">Your credit card will arrive soon. Thank you for choosing&nbsp;us!</p>
    <a href="/#" className="congratulation__link">View other offers of&nbsp;our bank</a>
  </div>
);

export default Congratulation;
