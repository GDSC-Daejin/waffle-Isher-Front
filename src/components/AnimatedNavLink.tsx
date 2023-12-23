import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavLinkBox = styled.div`
  padding: 10px;
  a {
    color: #CACCCE;
    svg {
      font-size: 2rem;
      transition: all 1s;
    }
    &.active {
      color: #277B69;
      svg {
        transform: translateY(-20px) rotate(360deg);
        transition: all 1s;
      }
    }
  }
`

interface AnimatedLink {
  to: string;
  children: React.ReactNode;
}

const AnimatedNavLink: React.FC<AnimatedLink> = ({ to, children }) => {

  return ( 
    <NavLinkBox>
      <NavLink to={to}>{children}</NavLink>
    </NavLinkBox>
  );
}

export default AnimatedNavLink;
