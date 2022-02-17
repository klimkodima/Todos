import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

import AppBarTab from './AppBarTab';
import logoImg from '../../assets/img/Аpplecity.svg';

const Header = styled.header`
width: 100%;
height: 7vh;
background-color: #474747;
padding: 1vh 4.16%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: left;
`;

const Logo = styled.div`
  margin-right: 50px;
`;

const AppBar = () => {

  return (
    <Header>
      <Link to="/">
        <Logo>
          <img src={logoImg} alt="logo.img" />
        </Logo>
      </Link>
      <AppBarTab />
    </Header>
  );
};

export default AppBar;