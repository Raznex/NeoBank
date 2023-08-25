import React from 'react';
import Promotion from "./Promotion/Promotion";
import ListTabs from "./Tabs/Tabs";
import Steps from "./Steps/Steps";
import CustomizeCard from "./CustomizeCard/CustomizeCard";

const CreditCard = () => {
  return (
    <>
      <Promotion/>
      <ListTabs/>
      <Steps/>
      <CustomizeCard/>
    </>
  );
};

export default CreditCard;
