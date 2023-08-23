import React from 'react';
import './_Tabs.scss';
import AboutCard from "./AboutCard/AboutCard";
import Rates from "./Rates/Rates";
import Cashback from "./Cashback/Cashback";

const Tabs = () => {
  return (
    <section className="tabs">
      <ul className="tabs__titles">
        <li className="tabs__title tabs__title_active">
          About card
        </li>
        <li className="tabs__title">
          Rates and conditions
        </li>
        <li className="tabs__title">
          Cashback
        </li>
        <li className="tabs__title">
          FAQ
        </li>
      </ul>
      {/*<AboutCard/>*/}
      {/*<Rates/>*/}
      <Cashback/>
    </section>
  );
};

export default Tabs;
