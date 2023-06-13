import React from 'react';
import CartWidget from "../CartWidget/CartWidget";
import {NavLink, Link} from 'react-router-dom';


const NavBar = () => {
  
  return (
    <nav className='NavBar'>
      <Link to='/'>
        <h3>La Alianza</h3>
      </Link>
      <div className='Categories'>
        <NavLink to={`category/celular`} className={({ isActive}) => isActive ? 'ActiveOption : 'Option'}>
      </div>
    </nav>
  );
};
export default NavBar;
