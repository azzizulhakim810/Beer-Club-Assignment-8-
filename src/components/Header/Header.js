import React from 'react';
import logo from '../../images/beer-svgrepo-com.svg'
import './Header.css';
const Header = () => {
  return (

    <nav className='navbar p-5'>
      <img src={logo} alt="" />
      <h1>B<span className="change-color-red">EE</span>R 
      CL<span className="change-color-yellow">U</span>B</h1>
      <h2>Choose Your Favourite Beers</h2>
    </nav>
  
  );
};

export default Header;