import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = styled.div`
  
`

const Common = () => {
  return ( 
    <Main>
      <Navbar/>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </Main>
  );
}
export default Common;