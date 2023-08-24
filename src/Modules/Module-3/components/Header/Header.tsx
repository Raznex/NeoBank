import React, {useState} from 'react';
import './_Header.scss'
import { Link, Routes, Route, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  //Открытие бургера
  const handleClick = () => {
    if(isOpen === true) {
      setIsOpen(false)
    } else {setIsOpen(true)}
    console.log(isOpen)
  }

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">NeoBank</a>
        <nav className={`header__menu ${isOpen ? 'header__menu_active' : ''}`}>
          <ul className="header__links">
            <li><a href="/credit-card" className={`header__link ${location.pathname === "/credit-card" ? "header__link_active" : ""}`}>Credit card</a></li>
            <li><a href="/#" target="_blank" className="header__link">Product</a></li>
            <li><a href="/#" target="_blank" className="header__link">Account</a></li>
            <li><a href="/#" target="_blank" className="header__link">Resources</a></li>
          </ul>
          <a href="/">
            <button className="header__button">Online Bank</button>
          </a>
        </nav>
        <button className={`header__button-burger ${isOpen ? 'header__button-burger_close' : 'header__button-burger_open'}`}onClick={handleClick}></button>
      </div>
    </header>
  );
};

export default Header;
