import React, { useEffect } from 'react';

import Promotion from './Promotion/Promotion';
import ListTabs from './Tabs/Tabs';
import Steps from './Steps/Steps';
import CustomizeCard from './CustomizeCard/CustomizeCard';
import LoanOffer from '../../../Module-4/components/LoanOffer/LoanOffer';
import { useAppDispatch, useAppSelector } from '../../../Module-4/utils/hooks/redux';
import { getStatusOffer } from '../../../Module-4/utils/store/Reducer/prescoringSlice';


const CreditCard = () => {
  const offers = JSON.parse(localStorage.getItem('offers') || 'null');
  const { isFirstStepClose } = useAppSelector(((state) => state.prescoringSlice));
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (offers) {
      dispatch(getStatusOffer(String(offers[0].applicationId)));
    }
  }, []);

  return (
    <>
      <Promotion />
      <ListTabs />
      <Steps />
      { offers || isFirstStepClose ? <LoanOffer offers={ offers } /> : <CustomizeCard /> }
    </>
  );
};

export default CreditCard;
