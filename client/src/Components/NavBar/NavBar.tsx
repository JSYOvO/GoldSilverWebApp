import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
interface NavBar {}

const NavBar: React.FC<NavBar> = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header__wrapper">
      <div className="header__logo">
        <Link to="/">
          <h1>JSYOvO Invest</h1>
        </Link>
      </div>
      <div className="header__menuItems">
        <Link to="/free">
          <h1>Free Stocks</h1>
        </Link>
        <Link to="/portfolio">
          <h1>PortFolio</h1>
        </Link>
        <Link to="/Cash">
          <h1>Cash</h1>
        </Link>
        <Link to="/Messages">
          <h1>Messages</h1>
        </Link>
        {/* <Link to="/Account">
          <h1>Account</h1>
        </Link> */}
      </div>
    </div>
  );
};

export default NavBar;
