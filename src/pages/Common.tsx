import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

const Main = styled.div`
  
`

const Common = () => {
  return ( 
    <Main>
      <div className="container">
        <Outlet/>
      </div>
      <Footer/>
    </Main>
  );
}
export default Common;