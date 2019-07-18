import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.scss';

const Header = () => (
  <div className="header">
    <ul>
      <li>
        <NavLink to="/" exact>
          Latest Posts
        </NavLink>
      </li>
    </ul>
  </div>
);

export default Header;
