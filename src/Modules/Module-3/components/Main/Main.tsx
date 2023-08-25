import React from 'react';
import ChooseCard from "./ChooseCard/ChooseCard";
import Advantage from "./Advantage/Advantage";
import Rate from "./Rate/Rate";
import Map from "./Map/Map";
import News from "./News/News";
import Subscribe from "./Subscribe/Subscribe";
import {NewsCard} from '../../utils/Interface'

interface MainProps {
  cards: NewsCard[];
  addCard: number;
  isLoading: boolean;
  currency: any;
}

const Main: React.FC<MainProps> = ({cards, addCard, isLoading, currency}) => {
  return (
    <>
      <ChooseCard/>
      <Advantage/>
      <Rate
        currency={currency}
        isLoading={isLoading}/>
      <Map/>
      <News
        cards={cards}
        addCard={addCard}
        isLoading={isLoading}
      />
      <Subscribe/>
    </>
  );
};

export default Main;
