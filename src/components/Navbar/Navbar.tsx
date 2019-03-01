import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as style from './Navbar.style';

interface NavbarProps {
  className?: string;
}

const Navbar: React.StatelessComponent<NavbarProps> = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink to="/" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/favourite">Favourite</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default styled(Navbar)`
  ${style.navbar}
`;
