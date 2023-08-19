import React from 'react';

interface NewsCardProps {
  card: any;
}

const NewsCard: React.FC<NewsCardProps> = ({card}) => {

  return (
    <article className="news__card">
      <a href={card.url} target="_blank" rel="noreferrer" className="news__card-link">
        <img src={card.urlToImage} alt={card.title} className="news__card-image"/>
      </a>
      <p className="news__card-title">
        {card.title}
      </p>
      <p className="news__card-text">
        {card.description}
      </p>
    </article>
  );
};

export default NewsCard;
