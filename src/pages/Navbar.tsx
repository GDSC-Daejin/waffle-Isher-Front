import styled from "styled-components";
import { Link } from "react-router-dom";

import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { useState } from "react";

const NavbarContainer = styled.div`
  position: fixed;
  top: 15px;
  right: 20px;
  z-index: 2;
  a {
    color: black;
  }
`

const Navbar = () => {
  const [login, setLogin] = useState<boolean>(false);
  return ( 
    <NavbarContainer>
      {login ? 
        <Link to={'/login'}><RiLoginCircleLine size={30}/></Link> : 
        <Link to={'/login'}><RiLogoutCircleLine size={30}/></Link>
      }
    </NavbarContainer>
  );
}
export default Navbar;