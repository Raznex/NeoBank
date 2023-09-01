import React, { useState } from 'react';

import './_News.scss';
import NewsCard from './NewsCard/NewsCard';
import PreloaderToCards from '../../Preloader/PreloaderToCards/PreloaderToCards';
import { NewsCards } from '../../../utils/Interface';


interface NewsProps {
  cards: NewsCards[];
  addCard: number;
  isLoading: boolean;
}

const News: React.FC<NewsProps> = ({
  cards,
  addCard,
  isLoading,
}) => {
  const [offset, setOffset] = useState(0);
  const slideRef = React.useRef<HTMLDivElement | null>(null);
  const buttonDisable = (currentOffset: number) => {
    const buttonNext = document.querySelector('.news__button_next') as HTMLButtonElement;
    const buttonPrevious = document.querySelector('.news__button_previous') as HTMLButtonElement;
    if (buttonPrevious && buttonNext && slideRef.current) {
      buttonPrevious.disabled = currentOffset >= 0;
      buttonNext.disabled = currentOffset <= -(slideRef.current.childElementCount - addCard) * 400;

      if (currentOffset >= 0) {
        buttonPrevious.classList.add('news__button_previous_disable');
      } else {
        buttonPrevious.classList.remove('news__button_previous_disable');
      }

      if (currentOffset <= -(slideRef.current.childElementCount - addCard) * 400) {
        buttonNext.classList.add('news__button_next_disable');
      } else {
        buttonNext.classList.remove('news__button_next_disable');
      }
    }
  };
  // Прокрутка вправо
  const moveRight = () => {
    const newOffset = offset - 400;
    setOffset(newOffset);
    if (slideRef.current) {
      slideRef.current.style.left = `${newOffset}px`;
      buttonDisable(newOffset);
    }
  };
  // Прокрутка влево
  const moveLeft = () => {
    const newOffset = offset + 400;
    setOffset(newOffset);
    if (slideRef.current) {
      slideRef.current.style.left = `${newOffset}px`;
      buttonDisable(newOffset);
    }
  };
  // Дизейбл кнопок добавления карточек


  return (
    <section className="news">
      <h2 className="news__title">Current news from the world of finance</h2>
      <p className="news__subtitle">
        We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.
      </p>
      { isLoading ? (
        <PreloaderToCards />
      ) : (
        <div className="news__cards">
          <div ref={ slideRef } className="news__card-container">
            { cards?.map((card: NewsCards) => (
              <NewsCard key={ card.publishedAt } card={ card } />
            )) }
          </div>
        </div>
      ) }
      <div className="news__container-button">
        <button
          className="news__button news__button_previous news__button_previous_disable"
          type="button"
          disabled={ offset >= 0 }
          onClick={ moveLeft }
        />
        <button
          type="button"
          className="news__button news__button_next"
          onClick={ moveRight }
        />
      </div>
    </section>
  );
};

export default News;
