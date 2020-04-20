import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import links from './links';

const LinkWrapper = styled.ul`
  display: flex;
  justify-content: space-evenly;
  li {
    list-style-type: none;
    text-transform: capitalize;
    margin-right: 15px;
    margin-left: 15px;
    font-size: 1.5rem;
    a {
      color: black;
    }
  }
  li:last-child a {
    color: #1b1464;
  }
`;
const Menu = () => {
  return (
    <div>
      <LinkWrapper>
        {links.map(item => {
          return (
            <li key={item.id}>
              <NavLink to={item.path} title={item.name}>
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </LinkWrapper>
    </div>
  );
};

export default Menu;
