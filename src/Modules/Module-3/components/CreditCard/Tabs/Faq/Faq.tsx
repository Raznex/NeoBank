import React, {useState} from 'react';
import './_Faq.scss';
import ExpandDown from "../../../../../../common/assets/icon/moduleIcon/ExpandDown";
import Accordion from "./Accordion/Accordion";
import {cardReceivingQuestions, cardCreditQuestions} from '../../../../utils/Constants'

const Faq = () => {
  const [openIdRecCard, setOpenIdRecCard] = useState<number[]>([]);
  const [openIdCreditCard, setOpenIdCreditCard] = useState<number[]>([]);

  //Открытие аккордиона на первой вкладке
  const handleToggle1 = (id: number) => {
    if (openIdRecCard.includes(id)) {
      setOpenIdRecCard(openIdRecCard.filter(openId => openId !== id));
    } else {
      setOpenIdRecCard([...openIdRecCard, id]);
    }
  };

//Открытие аккордиона на второй вкладке
  const handleToggle2 = (id: number) => {
    if (openIdCreditCard.includes(id)) {
      setOpenIdCreditCard(openIdCreditCard.filter(openId => openId !== id));
    } else {
      setOpenIdCreditCard([...openIdCreditCard, id]);
    }
  };

  return (
    <div className="faq">
      <p className="faq__title">Issuing and receiving a&nbsp;card</p>
      <ul className="faq__container">
        {cardReceivingQuestions.map((cardReceivingQuestion, id) => (
          <Accordion
            cardReceivingQuestions={cardReceivingQuestion}
            onClick={() => handleToggle1(id)}
            id={id}
            key={id}
            isOpen={openIdRecCard.includes(id)}
          />
        ))}
      </ul>
      <p className="faq__title">Using a&nbsp;credit card</p>
      <ul className="faq__container">
        {cardCreditQuestions.map((cardCreditQuestion, id) => (
          <Accordion
            cardReceivingQuestions={cardCreditQuestion}
            onClick={() => handleToggle2(id)}
            id={id}
            key={id}
            isOpen={openIdCreditCard.includes(id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Faq;
