import React from 'react';
import {
  BagDuotone,
  CalendarDuotone,
  ClockDuotone,
  CreditCardDuotone,
  MoneyDuotone
} from "../../../../../../common/assets/icon/moduleIcon/index";
import './_AboutCard.scss'

const AboutCard = () => {
  return (
    <>
      <div className="about-card__container">
        <div className="about-card__container-s">
          <article className="about-card__card">
            <MoneyDuotone className="about-card__card-icon"/>
            <p className="about-card__card-name">Up&nbsp;to&nbsp;50&nbsp;000&nbsp;₽</p>
            <p className="about-card__card-description">Cash and transfers without commission and
              percent</p>
          </article>
          <article className="about-card__card about-card__card_gray">
            <CalendarDuotone className="about-card__card-icon"/>
            <p className="about-card__card-name">Up&nbsp;to&nbsp;160&nbsp;days</p>
            <p className="about-card__card-description">Without percent on&nbsp;the loan</p>
          </article>
          <article className="about-card__card">
            <ClockDuotone className="about-card__card-icon"/>
            <p className="about-card__card-name">Free&nbsp;delivery</p>
            <p className="about-card__card-description">We&nbsp;will deliver your card by&nbsp;courier
              at&nbsp;a&nbsp;convenient place and time for you</p>
          </article>
        </div>
        <div className="about-card__container-s">
          <article className="about-card__card about-card__card_l about-card__card_gray">
            <BagDuotone className="about-card__card-icon"/>
            <p className="about-card__card-name">Up&nbsp;to&nbsp;12&nbsp;months</p>
            <p className="about-card__card-description">No&nbsp;percent. For equipment, clothes and other purchases
              in&nbsp;installments</p>
          </article>
          <article className="about-card__card about-card__card_l">
            <CreditCardDuotone className="about-card__card-icon"/>
            <p className="about-card__card-name">Convenient deposit and withdrawal</p>
            <p className="about-card__card-description">At&nbsp;any ATM. Top up&nbsp;your credit card for free with cash
              or&nbsp;transfer from other cards</p>
          </article>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
