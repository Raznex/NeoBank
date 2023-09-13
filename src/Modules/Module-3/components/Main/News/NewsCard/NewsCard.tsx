import React from 'react';

import { NewsCards } from '../../../../utils/Interface';


interface NewsCardProps {
  card: NewsCards;
}

const NewsCard: React.FC<NewsCardProps> = ({ card }) => (
  <article className="news__card">
    <a href={ card.url } target="_blank" rel="noreferrer" className="news__card-link">
      <img src={ card.urlToImage } alt={ card.title } className="news__card-image" />
    </a>
    <p className="news__card-title">
      { card.title }
    </p>
    <p className="news__card-text">
      { card.description }
    </p>
  </article>
);

export default NewsCard;
