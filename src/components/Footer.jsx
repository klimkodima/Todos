import React from "react";
import  styled  from "styled-components";

const StyledFooter = styled.footer`
height: 3vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #474747;
padding: 30px 4.16%;
color: #FFF;
bottom: 0;
position: sticky;
`
const Footer = () => {

  return (
    <StyledFooter>
      <p >
        © {new Date().getFullYear()}{" "}
        Made with love for a better web!
      </p>
    </StyledFooter>
  );
}

export default Footer;
