import React from "react";
import  styled  from "styled-components";

import bgImg from '../assets/img/bg.jpg';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${bgImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 72vh;
`
const H1 = styled.h1`
font-size: 4.7vw;
line-height: 4.7vw;
color: #FFF;
text-align: center;
`
const Home = () => {

  return (
    <Section>
      <H1>Main page of the application</H1>
    </Section>
  );
}

export default Home;
