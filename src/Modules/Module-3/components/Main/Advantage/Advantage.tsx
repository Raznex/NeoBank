import React from 'react';

import { AdvantageIllustration, AdvantageMark } from '../../../../../common/assets/icon/moduleIcon/index';
import './_Advantage.scss';


const Advantage: React.FC = () => (
  <section className="advantage">
    <AdvantageIllustration className="advantage__image" />
    <div className="advantage__container">
      <h2 className="advantage__title">We Provide Many Features You&nbsp;Can&nbsp;Use</h2>
      <p className="advantage__description">You can explore the features that we provide with fun and have their own functions each feature</p>
      <ul className="advantage__list">
        <li className="advantage__list-container">
          <AdvantageMark className="advantage__mark" />
          <p className="advantage__privilege">Powerfull online protection.</p>
        </li>
        <li className="advantage__list-container">
          <AdvantageMark className="advantage__mark" />
          <p className="advantage__privilege">Cashback without borders.</p>
        </li>
        <li className="advantage__list-container">
          <AdvantageMark className="advantage__mark" />
          <p className="advantage__privilege">Personal design</p>
        </li>
        <li className="advantage__list-container">
          <AdvantageMark className="advantage__mark" />
          <p className="advantage__privilege">Work anywhere in the world</p>
        </li>
      </ul>
    </div>
  </section>
);

export default Advantage;
