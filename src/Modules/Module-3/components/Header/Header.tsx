import React from 'react';
import './_Header.scss'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__container">
        <p className="header__logo">NeoBank</p>
        <nav>
          <ul className="header__links">
            <li><a href="/#" target="_blank" className="header__link">Credit card</a></li>
            <li><a href="/#" target="_blank" className="header__link">Product</a></li>
            <li><a href="/#" target="_blank" className="header__link">Account</a></li>
            <li><a href="/#" target="_blank" className="header__link">Resources</a></li>
          </ul>
        </nav>
        <button className="header__button">Online Bank</button>
        <nav className="header__dropdown">
          <button className="header__drop-button"></button>
          <ul className="header__dropdown-content">
            <button className="header__button header__button_burger">Online Bank</button>
            <li><a href="/#" target="_blank" className="header__link">Credit card</a></li>
            <li><a href="/#" target="_blank" className="header__link">Product</a></li>
            <li><a href="/#" target="_blank" className="header__link">Account</a></li>
            <li><a href="/#" target="_blank" className="header__link">Resources</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
