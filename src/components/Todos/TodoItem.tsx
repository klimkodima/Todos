import React from 'react';
import { useDispatch } from 'react-redux';
import  styled  from "styled-components";

import { completedTodo } from '../../reducers/todosReducer';
import { setNotification } from '../../reducers/notificationReducer';
import { Todo } from '../../types';

const Item = styled.div`
display: flex;
flex-direction: column;
justify-content: left;
border: 1px solid black;
border-radius: 10px;
margin: 10px 6%  10px 4.16%;
padding: 5px;
`
const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 5px 6%  5px 4.16%;
padding: 5px 10%;
`

const TodoItem = ({ todo }:{todo: Todo}) => {

  const dispatch = useDispatch();

  const setCompleted  = () => {
    const changedTodo = {
      ...todo,
      completed: true
    }
    dispatch(completedTodo(changedTodo));
    dispatch(setNotification(`You completed todo "${ changedTodo.title }"`, 10));
  };

  return(
    <Item key={todo.id}>
      <p>
        {todo.title}
      </p>
      <Wrapper>
        { todo.completed=== true ? 
        <span className="success"> Completed: {todo.completed.toString()}</span> :
         <span> Completed: {todo.completed.toString()}</span> }
        { todo.completed=== false && <button onClick={ setCompleted }>Complet</button>}
      </Wrapper>
    </Item>
  )
};

export default TodoItem;