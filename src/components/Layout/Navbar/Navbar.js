import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';

const logo = require('../../../images/logobar.png');

const projectName = 'CivicTechHub';
const Navbar = () => {
  return (
    <Head>
      <Nav>
        <NavLink to="/" title={projectName}>
          <LogoBar>
            <img src={logo} alt={projectName} style={{ width: 40 }} />
            <p>Civic Tech Hub</p>
          </LogoBar>
        </NavLink>{' '}
        <Menu />{' '}
      </Nav>
    </Head>
  );
};

export default Navbar;

const LogoBar = styled.span`
  display: flex;
  align-items: center;
  p {
    color: black;
    font-size: 1.5rem;
  }
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  max-width: 80%;
  margin: 0 auto;
  height: 80px;
  align-items: center;
`;
const Head = styled.header`
  width: 100%;
  border-bottom: solid 1.5px #dcdcdc;
`;
