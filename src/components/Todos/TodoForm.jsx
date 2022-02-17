import React from 'react';
import  styled  from "styled-components";
import { createTodo } from '../../reducers/todosReducer';
import { setNotification } from '../../reducers/notificationReducer';
import { connect } from 'react-redux';

const Form = styled.form`
width: 50%;
display: flex;
justify-content: left;
flex-direction: row;
border; 1px solid black;
border-radius: 10px;
margin: 20px;
padding-left: 4.16%;
`;

const Input = styled.input`
 height: 40px;
 width: 400px;
`;

const Button = styled.button`
 &hover{
   cursor:pointer;
 }
`;

const TodoForm = (props) => {

  const addTodo = async (event) => {
    event.preventDefault()
    const content = event.target.todo.value
    event.target.value = ''
    props.createTodo(content)
    props.setNotification(` You added "${content}"`, 5)
  }

  return (
      <Form onSubmit={addTodo}>
        <Input name="todo"  placeholder='Create new todo'/>
        <Button type="submit">Create</Button>
      </Form>
  )
}

export default connect(null, { createTodo, setNotification })(TodoForm);

