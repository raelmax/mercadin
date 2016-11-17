import React from 'react';
import { Link } from 'react-router';

const Header = ({text, backButton}) => {
  return (
    <header className="header">
      {backButton ? <Link className="header-back-button" to={'/'}>&lsaquo;</Link> : null}
      <h1 className="header-text">{text}</h1>
    </header>
  )
}

export default Header;
