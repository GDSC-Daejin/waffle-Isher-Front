import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const NavLinkBox = styled(animated.div)`
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
  const [click, setClick] = useState(false);
  const springProps = useSpring({   
  });

  const startAnimation = () => { 
    setClick(!click)
  };

  return ( 
    <NavLinkBox style={springProps}>
      <NavLink to={to} onClick={startAnimation}>{children}</NavLink>
    </NavLinkBox>
  );
}

export default AnimatedNavLink;
