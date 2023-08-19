import React from 'react';
import './_Subscribe.scss';
import letter from '../../../../../common/assets/icon/letter.svg'
import send from '../../../../../common/assets/icon/send.svg'

const Subscribe: React.FC = () => {
  return (
    <section className="subscribe">
      <a href="/#" target="_blank" className="subscribe__support">Support</a>
      <a href="/#" target="_blank" className="subscribe__get">Subscribe Newsletter&nbsp;&&nbsp;get</a>
      <a href="/#" target="_blank" className="subscribe__news">Bank News</a>
      <form action="" className="subscribe__form">
        <img src={letter} alt="letter" className="subscribe__letter"/>
        <input
          type="email"
          className="subscribe__input"
          aria-label="Enter your email to subscribe to news"
          placeholder="Your email"
        />
        <button className="subscribe__submit subscribe__submit_little">
          <img src={send} alt="Send" className="subscribe__send"/>
          <p className="subscribe__button-text">Subscribe</p>
        </button>
      </form>
    </section>
  );
};

export default Subscribe;