import React from 'react';
import Promotion from "./Promotion/Promotion";
import Tabs from "./Tabs/Tabs";
import Steps from "./Steps/Steps";
import CustomizeCard from "./CustomizeCard/CustomizeCard";

const CreditCard = () => {
  return (
    <>
      <Promotion/>
      <Tabs/>
      <Steps/>
      <CustomizeCard/>
    </>
  );
};

export default CreditCard;
