import React from 'react';
import { Link } from 'react-router';

const headerStyles = {
  backgroundColor: '#133253',
  padding: '15px 10px',
  position: 'relative'
}

const textStyles = {
  textTransform: 'uppercase',
  textAlign: 'center',
  fontSize: '1em',
  color: '#fff',
  margin: 0,
}

const linkStyles = {
  textDecoration: 'none',
  position: 'absolute',
  lineHeight: '40px',
  fontSize: '50px',
  color: '#fff',
  top: 0
}

const Header = ({text, backButton}) => {
  return (
    <header style={headerStyles}>
      {backButton ? <Link to={'/'} style={linkStyles}>&lsaquo;</Link> : null}
      <h1 style={textStyles}>{text}</h1>
    </header>
  )
}

export default Header;
