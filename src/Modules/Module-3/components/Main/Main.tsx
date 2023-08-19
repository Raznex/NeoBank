import React from 'react';
import './_Content.scss'
import ChooseCard from "./ChooseCard/ChooseCard";
import Advantage from "./Advantage/Advantage";
import Rate from "./Rate/Rate";
import Map from "./Map/Map";
import News from "./News/News";
import Subscribe from "./Subscribe/Subscribe";


interface MainProps {
  cards: any;
  addCard: number;
  isLoading: boolean;
}

const Main = ({cards, addCard, isLoading}: MainProps) => {
  return (
    <main className="content">
      <ChooseCard/>
      <Advantage/>
      <Rate/>
      <Map/>
      <News
        cards={cards}
        addCard={addCard}
        isLoading={isLoading}
      />
      <Subscribe/>
    </main>
  );
};

export default Main;
