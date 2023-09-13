import React from 'react';

import './_Footer.scss';
import logo from '../../../../common/assets/images/logo_neoflex.png';


const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__head">
        <img src={ logo } alt="Logo" className="footer__logo" />
        <div className="footer__contacts">
          <a href="tel:+74959842513" className="footer__phone">+7 (495) 984 25 13</a>
          <a href="mailto:info@neoflex.ru" className="footer__email">info@neoflex.ru</a>
        </div>
      </div>
      <nav>
        <ul className="footer__navigation">
          <li><a href="/#" target="_blank" className="footer__link">About bank</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Ask a Question</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Quality of service</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Requisites</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Press center</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Bank career</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Investors</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Analytics</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Business and processes</a></li>
          <li><a href="/#" target="_blank" className="footer__link">Compliance and business ethics</a></li>
        </ul>
      </nav>
      <p className="footer__rules">
        We use cookies to personalize our services and improve the user experience of our website. Cookies are small files containing
        information about previous visits to a website. If you do not want to use cookies, please change your browser settings.
      </p>
    </div>
  </footer>
);

export default Footer;
