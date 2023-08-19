import React, {useEffect, useState} from 'react';
import './_News.scss';
import NewsCard from "./NewsCard/NewsCard";
import Preloader from "../../Preloader/Preloader";

interface NewsProps {
  cards: any;
  addCard: number;
  isLoading: boolean;
}

const News = ({cards, addCard, isLoading}: NewsProps) => {

  const [offset, setOffset] = useState(0);
  const slideRef = React.useRef<HTMLDivElement | null>(null);
//Прокрутка вправо
  const moveRight = () => {
    const newOffset = offset - 400;
    setOffset(newOffset);
    if (slideRef.current) {
      slideRef.current.style.left = newOffset + 'px';
      buttonDisable(newOffset);
    }
  };
  //Прокрутка влево
  const moveLeft = () => {
    const newOffset = offset + 400;
    setOffset(newOffset);
    if (slideRef.current) {
      slideRef.current.style.left = newOffset + 'px';
      buttonDisable(newOffset);
    }
  };
//Дизейбл кнопок добавления карточек
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

  return (
          <section className="news">
        <h2 className="news__title">Current news from the world of finance</h2>
        <p className="news__subtitle">
          We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.
        </p>
            {isLoading ? (
              <Preloader />
            ) : (
        <div className="news__cards">
          <div className="news__card-container" ref={slideRef}>
            {cards?.map((card: any) => (
              <NewsCard card={card} key={card.publishedAt}/>
            ))}
          </div>
        </div>
            )}
        <div className="news__container-button">
          <button
            className="news__button news__button_previous news__button_previous_disable"
            disabled={offset >= 0}
            onClick={moveLeft}
          />
          <button className="news__button news__button_next"
                  onClick={moveRight}
          />
        </div>
      </section>
  );
};

export default News;
