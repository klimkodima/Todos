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