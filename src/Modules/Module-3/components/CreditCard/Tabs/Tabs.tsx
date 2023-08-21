import React from 'react';
import './_Tabs.scss';
import AboutCard from "./AboutCard/AboutCard";

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
      <AboutCard/>
    </section>
  );
};

export default Tabs;
