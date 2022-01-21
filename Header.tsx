import React from 'react';
import { Container } from '@mui/material';
import LogoImg from '../../../../../assets/logo.png';
import styled from "styled-components";
import {Typography} from "@mui/material";



const HeaderContainerL = styled.div`
  text-align: left;
  position:fixed;
   left:450px;
   bottom:500px;
   z-index:777;
   
`;
const HeaderContainerC = styled.div`
  text-align: center;
  position:fixed;
  left:650px;
   bottom:50px;
   z-index:777;
 
`;
const HeaderContainerR =styled.div`
  text-align:right;
  position:fixed;
  right:400px;
  bottom:50px;
  z-index:777;`

const HeaderLogo = styled.img`
  width: 200px;
  position:fixed;
  Top: 0px;
  left:50px;
`;


const Header = () => (
  <Container>
     <HeaderLogo src={LogoImg} alt="logo" />
    <HeaderContainerL>
      <Typography variant="h6" align="justify">Terms&Conditions</Typography>
    </HeaderContainerL>
    <HeaderContainerC>
      <Typography variant="h6" align="justify">Policy Privacy </Typography>
    </HeaderContainerC>
    <HeaderContainerR>
      <Typography variant="h6" align="justify">info@technoandchill.com</Typography>
    </HeaderContainerR>
    </Container>)
    
 export default Header;