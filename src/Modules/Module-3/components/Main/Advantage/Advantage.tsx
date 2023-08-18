import React from 'react';
import mark from '../../../../../common/assets/icon/advantage__mark.svg'
import illustration from '../../../../../common/assets/icon/advantage__illustration.svg'
import './_Advantage.scss'

const Advantage: React.FC = () => {
  return (
    <section className="advantage">
      <img src={illustration} alt="Man" className="advantage__image" />
      <div className="advantage__container">
        <h2 className="advantage__title">We Provide Many Features You&nbsp;Can&nbsp;Use</h2>
        <p className="advantage__description">You can explore the features that we provide with fun and have their own functions each feature</p>
        <ul className="advantage__list">
          <li className="advantage__list-container">
            <img src={mark} alt="mark" className="advantage__mark" />
            <p className="advantage__privilege">Powerfull online protection.</p>
          </li>
          <li className="advantage__list-container">
            <img src={mark} alt="mark" className="advantage__mark" />
            <p className="advantage__privilege">Cashback without borders.</p>
          </li>
          <li className="advantage__list-container">
            <img src={mark} alt="mark" className="advantage__mark" />
            <p className="advantage__privilege">Personal design</p>
          </li>
          <li className="advantage__list-container">
            <img src={mark} alt="mark" className="advantage__mark" />
            <p className="advantage__privilege">Work anywhere in the world</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantage;
