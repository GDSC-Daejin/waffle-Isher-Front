import AnimatedNavLink from "../components/AnimatedNavLink";

import { IoHome, IoSearch, IoStorefront } from "react-icons/io5";
import { FaRegUserCircle, FaHeart } from "react-icons/fa";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 15px 0px;
  border-radius: 15px 15px 0px 0px;
  background-color: aliceblue;
  z-index: 999;
`

const Footer = () => {
  return ( 
    <FooterContainer>
      <AnimatedNavLink to="/"><IoHome/></AnimatedNavLink>
      <AnimatedNavLink to="/search"><IoSearch/></AnimatedNavLink>
      <AnimatedNavLink to="/home"><IoStorefront/></AnimatedNavLink>
      <AnimatedNavLink to="/great"><FaHeart/></AnimatedNavLink>
      <AnimatedNavLink to="/mypage"><FaRegUserCircle/></AnimatedNavLink>
    </FooterContainer>
  );
}
export default Footer;