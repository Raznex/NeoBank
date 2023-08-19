import React from 'react';
import './_Preloader.scss'

const PreloaderToCards = () => {
  return (
    <div className="preloader">
      <div className="preloader__container">
        <span className="preloader__round"></span>
      </div>
    </div>
  );
};

export default PreloaderToCards;
