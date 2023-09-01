import React from 'react';

import image from '../../../../common/assets/images/Error404.png';
import './_PageNotFound.scss';


const PageNotFound = () => (
  <div className="notfound">
    <div className="notfound__container">
      <p className="notfound__title">Oops....</p>
      <p className="notfound__subtitle">Page not found</p>
      <p className="notfound__description">This Page doesn`t exist or&nbsp;was removed! We&nbsp;suggest you go&nbsp;back.</p>
      <a href="/" className="notfound__back">Go back</a>
    </div>
    <img src={ image } alt="Error 404" className="notfound__image" />
  </div>
);

export default PageNotFound;
