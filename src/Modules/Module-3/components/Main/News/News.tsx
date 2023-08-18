import React from 'react';
import'./_News.scss';
import NewsCard from "./NewsCard/NewsCard";

const News: React.FC = () => {
  return (
    <section className="news">
      <h2 className="news__title">Current news from the world of finance</h2>
      <p className="news__subtitle">We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.</p>
      <div className="news__cards">
        <div className="news__card-container" id="newsContainer">
          <NewsCard/>
        </div>
      </div>
      <div className="news__container-button">
        <button className="news__button news__button_previous news__button_previous_disable" disabled></button>
        <button className="news__button news__button_next"></button>
      </div>
    </section>
  );
};

export default News;
