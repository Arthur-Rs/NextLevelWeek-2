import React from 'react';
import { Link } from 'react-router-dom';

// => Imagens
import Back from '../../assets/images/icons/back.svg'
import Logo from '../../assets/images/logo.svg'

import './styles.css'

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
  return (
    <header className="page-header">

      <div className="top-bar-container">
        <Link to="/">
          <img src={Back} alt="Back" />
        </Link>
        <img src={Logo} alt="Logo" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {children}
      </div>
    </header>
  );
}

export default Header;