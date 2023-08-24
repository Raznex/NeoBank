import React from 'react';
import './_Tabs.scss';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import AboutCard from "./AboutCard/AboutCard";
import Rates from "./Rates/Rates";
import Cashback from "./Cashback/Cashback";
import Faq from "./Faq/Faq";

const ListTabs = () => {
  return (
    <Tabs className="tabs">
      <TabList className="tabs__titles">
        <Tab className="tabs__title">
          About card
        </Tab>
        <Tab className="tabs__title">
          Rates and conditions
        </Tab>
        <Tab className="tabs__title">
          Cashback
        </Tab>
        <Tab className="tabs__title">
          FAQ
        </Tab>
      </TabList>
      <TabPanel>
        <AboutCard/>
      </TabPanel>
      <TabPanel>
        <Rates/>
      </TabPanel>
      <TabPanel>
        <Cashback/>
      </TabPanel>
      <TabPanel>
        <Faq/>
      </TabPanel>
    </Tabs>
  );
};

export default ListTabs;
