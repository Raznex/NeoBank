import React from 'react';

import ChooseCard from './ChooseCard/ChooseCard';
import Advantage from './Advantage/Advantage';
import Rate from './Rate/Rate';
import Map from './Map/Map';
import News from './News/News';
import Subscribe from './Subscribe/Subscribe';
import { CurrencyData, NewsCards } from '../../utils/Interface';


interface MainProps {
  cards: NewsCards[];
  addCard: number;
  isLoading: boolean;
  currency: CurrencyData[];
}


const Main: React.FC<MainProps> = ({ cards, addCard, isLoading, currency }) => (
  <>
    <ChooseCard />
    <Advantage />
    <Rate
      isLoading={ isLoading }
      currency={ currency }
    />
    <Map />
    <News
      cards={ cards }
      addCard={ addCard }
      isLoading={ isLoading }
    />
    <Subscribe />
  </>
);

export default Main;
