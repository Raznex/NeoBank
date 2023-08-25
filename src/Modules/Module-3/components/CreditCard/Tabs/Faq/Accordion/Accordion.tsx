import React from 'react';
import ExpandDown from "../../../../../../../common/assets/icon/moduleIcon/ExpandDown";
import './_Accordion.scss'

interface AccordionProps {
  cardReceivingQuestions: any;
  onClick: () => void;
  id: number;
  isOpen: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ cardReceivingQuestions, isOpen, id, onClick }) => {
  return (
    <li className={`accordion ${isOpen ? 'accordion_open' : ''}`} onClick={onClick}>
      <p className="accordion__title">{cardReceivingQuestions.question}</p>
      <p className={`accordion__description ${isOpen ? 'accordion__description_open' : ''}`}>
        {cardReceivingQuestions.answer}
      </p>
      <ExpandDown className={`accordion__expand ${isOpen ? 'accordion__expand_open' : ''}`} />
    </li>
  );
};


export default Accordion;
