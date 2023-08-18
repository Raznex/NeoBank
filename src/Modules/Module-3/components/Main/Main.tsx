import React from 'react';
import './_Content.scss'
import ChooseCard from "./ChooseCard/ChooseCard";
import Advantage from "./Advantage/Advantage";
import Rate from "./Rate/Rate";
import Map from "./Map/Map";
import News from "./News/News";
import Subscribe from "./Subscribe/Subscribe";

const Main: React.FC = () => {
  return (
    <main className="content">
      <ChooseCard/>
      <Advantage/>
      <Rate/>
      <Map/>
      <News/>
      <Subscribe/>
    </main>
  );
};

export default Main;
