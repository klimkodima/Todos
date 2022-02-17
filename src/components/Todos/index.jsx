import React from "react";
import styled from "styled-components";
import TodoForm from './TodoForm';
import Notification from '../Notification';
import TodoList from "./TodoList";
import Filter from "./Filter";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const H2 = styled.h2`
  font-size: 3.23vw;
  margin-top: 10px;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
width 100%;
align-items: center;
`;

const Todos = () => {

  return (
    <Section>
      <H2> Todos</H2>
      <Notification />
      <Wrapper>
        <TodoForm />
        <Filter />
      </Wrapper>
      <TodoList />
    </Section>
  );
};

export default Todos;