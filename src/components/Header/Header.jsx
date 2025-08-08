import React from 'react';
import './Header.css';


const Header = () => {
  return (
    <header className="header">
      <a href="/" className="header-brand-link">
        <img className="header-brand" src="/brand.png" />
      </a>
    </header>
  );
}

export default Header;