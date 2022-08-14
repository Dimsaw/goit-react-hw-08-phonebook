import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="register"
        className={navData => (navData.isActive ? s.active : s.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="login"
        className={navData => (navData.isActive ? s.active : s.link)}
      >
        Log In
      </NavLink>
    </div>
  );
}
