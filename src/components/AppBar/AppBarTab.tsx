import React from 'react';
import { Link } from "react-router-dom";
import  styled  from "styled-components";

const Nav = styled.nav`
width: 100%;
display: flex;
justify-content: left;
`;

const StyledLink = styled(Link)`
color: #FFFFFF;
text-decoration: none;
font-size: 1.0vw;
line-height: 1.2vw;
margin-right: 30px;
`;

const AppBarTab = () => {

  const nav = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Todos',
      link: 'todos'
    }
  ];

  return (
    <Nav>
        {nav.map(link => (
          <StyledLink
            to={`${link.link}`}
            key={link.name}
          >
            {link.name}
          </StyledLink>
        ))}
    </Nav>
  );
};

export default AppBarTab;