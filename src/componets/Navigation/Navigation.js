import { NavLink } from 'react-router-dom';
// import s from './Navigation.module.css';
import React from 'react';

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        // className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/phoneBook"
        // className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Phonebook
      </NavLink>
      <NavLink
        to="/login"
        // className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Login
      </NavLink>
      <NavLink
        to="/register"
        // className={navData => (navData.isActive ? s.activeLink : s.link)}
      >
        Register
      </NavLink>
    </nav>
  );
}

export default Navigation;
