import React from 'react';

import Promotion from './Promotion/Promotion';
import ListTabs from './Tabs/Tabs';
import Steps from './Steps/Steps';
import CustomizeCard from './CustomizeCard/CustomizeCard';
import LoanOffer from '../../../Module-4/components/LoanOffer/LoanOffer';


const CreditCard = () => {
  const offers = JSON.parse(localStorage.getItem('offers') || 'null');
  return (
    <>
      <Promotion />
      <ListTabs />
      <Steps />
      { offers ? <LoanOffer offers={ offers } /> : <CustomizeCard /> }
    </>
  );
};

export default CreditCard;
