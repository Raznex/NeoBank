import React, { useEffect, useState } from 'react';

import './_Subscribe.scss';
import { Letter, Send } from '../../../../../common/assets/icon/moduleIcon/index';


const Subscribe: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);

  // Проверяем состояние подписки при загрузке компонента
  useEffect(() => {
    const subscribed = localStorage.getItem('subscribed');
    if (subscribed === 'true') {
      setIsSubscribed(true);
    }
  }, []);

  // Обработчик отправки формы
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь должен быть код для отправки POST-запроса на сервер
    // После успешной отправки запроса:
    setIsSubscribed(true);
    localStorage.setItem('subscribed', 'true');
  };

  return (
    <section className="subscribe">
      <a href="/#" target="_blank" className="subscribe__support">Support</a>
      <a href="/#" target="_blank" className="subscribe__get">Subscribe Newsletter&nbsp;&&nbsp;get</a>
      <a href="/#" target="_blank" className="subscribe__news">Bank News</a>
      <form action="" className="subscribe__form" onSubmit={ handleSubscribe }>
        { isSubscribed ? (
          <p className="subscribe__success">
            You are already subscribed to the bank's newsletter
          </p>
        ) : (
          <>
            <Letter className="subscribe__letter" />
            <input
              type="email"
              className="subscribe__input"
              aria-label="Enter your email to subscribe to news"
              placeholder="Your email"
            />
            <button type="submit" className="subscribe__submit subscribe__submit_little">
              <Send className="subscribe__send" />
              <p className="subscribe__button-text">Subscribe</p>
            </button>
          </>
        ) }
      </form>
    </section>
  );
};

export default Subscribe;
