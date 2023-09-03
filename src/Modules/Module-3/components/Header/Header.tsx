import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import './_Header.scss';


const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Открытие бургера
  const handleClick = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">NeoBank</a>
        <nav className={ `header__menu ${isOpen ? 'header__menu_active' : ''}` }>
          <ul className="header__links">
            <li>
              <a href="/loan" className={ `header__link ${location.pathname === '/loan' ? 'header__link_active' : ''}` }>Credit
                card
              </a>
            </li>
            <li><a href="/#" target="_blank" className="header__link">Product</a></li>
            <li><a href="/#" target="_blank" className="header__link">Account</a></li>
            <li><a href="/#" target="_blank" className="header__link">Resources</a></li>
          </ul>
          <a href="/">
            <button
              type="button"
              className="header__button"
            >Online Bank
            </button>
          </a>
        </nav>
        <button
          type="button"
          className={ `header__button-burger ${isOpen ? 'header__button-burger_close' : 'header__button-burger_open'}` }
          onClick={ handleClick }
        />
      </div>
    </header>
  );
};

export default Header;
