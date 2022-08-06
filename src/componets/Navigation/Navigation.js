import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import React from 'react';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="contatcs"
        className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Phonebook
      </NavLink>
    </nav>
  );
}

export default Navigation;
