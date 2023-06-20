import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export const Header = () => {

  return (
    <header>
        <div className="navigation">
        <ul>
          <li>
          <NavLink to="/">Home</NavLink>
            </li>
          <li>
            <NavLink to="/aboutme">About me</NavLink>
          </li>
          <li>
          <NavLink to="/portfolio">Portfolio</NavLink>
          </li>
          <li>
          <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/references">References</NavLink>
          </li>
          <li>
          <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
