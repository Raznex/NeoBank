import React from 'react';

import './_Steps.scss';


const Steps = () => (
  <section className="steps">
    <h2 className="steps__title">How to&nbsp;get a&nbsp;card</h2>
    <div className="steps__container">
      <article className="steps__direction">
        <div className="steps__upper-line">
          <p className="steps__number">1</p>
          <div className="steps__line" />
        </div>
        <p className="steps__description">Fill out an&nbsp;online application&nbsp;&mdash; you do&nbsp;not
          need to&nbsp;visit the bank
        </p>
      </article>
      <article className="steps__direction">
        <div className="steps__upper-line">
          <p className="steps__number">2</p>
          <div className="steps__line" />
        </div>
        <p className="steps__description">Find out the bank&rsquo;s decision immediately after
          filling out the application
        </p>
      </article>
      <article className="steps__direction">
        <div className="steps__upper-line">
          <p className="steps__number">3</p>
          <div className="steps__line" />
        </div>
        <p className="steps__description">The bank will deliver the card free of&nbsp;charge, wherever
          convenient, to&nbsp;your city
        </p>
      </article>
    </div>
  </section>
);

export default Steps;
