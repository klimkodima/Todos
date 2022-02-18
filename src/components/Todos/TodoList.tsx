import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import _ from 'underscore';

import TodoItem from './TodoItem';
import { fetchPageNumbers } from '../../utils/fetchPageNumbers';
import { Todo } from '../../types';


const List = styled.div`
  height: 60vh;
  width: 100%;
  margin-bottom: 20px;
`;

const Pages = styled.div`
   margin: 20px 0;
`;

const Page = styled.span`
{
  border: 1px solid lightgray;
  border-radius: 100%;
  padding: 5px 10px;
  margin: 0 10px;
  cursor: pointer;
}
:hover {
	background: lightgrey;
}
`;

const Left = styled.i`
{
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
}
`;

const Right = styled.i`
{
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
`;

const CurrentPage = styled.span`{
  border: 2px solid gray;
  font-weight: 700;
  border-radius: 100%;
  padding: 5px 10px;
  margin: 0 10px;
  cursor: pointer;
}
:hover {
	background: lightgrey;
}
`;

const TodoList = () => {

  const PAGE_LIMIT = 5;
  const PAGE_NEIGHBOURS = 2;
  

  const todos: Todo[] = useSelector((state: { todos: Todo[], filter: string }) => {
    if(state.filter === 'COMPLETED') {
      return state.todos.filter((todo: { completed: boolean; }) => todo.completed === true);
    }
    if(state.filter === 'ACTIVE') {
      return state.todos.filter((todo: { completed: boolean; }) => todo.completed === false);
    }
    return state.todos;
  }, _.isEqual);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalCount = todos.length;

  const [page, setPage] = useState<Todo[]>([]);
  const [pages, setPages] = useState<any>([]);

  const totalPages = Math.ceil(totalCount / PAGE_LIMIT);

  useEffect(() => {
    const pages = fetchPageNumbers(totalPages, currentPage, PAGE_NEIGHBOURS);
    setPages(pages);
    const offset = (currentPage - 1) * PAGE_LIMIT;
    const page = todos.slice(offset, offset + PAGE_LIMIT);
    setPage(page);
  }, [currentPage, todos, totalPages]);

  const handleSetPage = (page: number) => {
    switch (page) {
      case -1:
        setCurrentPage(currentPage - PAGE_NEIGHBOURS * 2 - 1);
        break;
      case 0:
        setCurrentPage(currentPage + PAGE_NEIGHBOURS * 2 + 1);
        break;
      default:
        setCurrentPage(page);
    }
  }

  return (
    <>
      <List>
        {page
          .map((todo: Todo) =>
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        }
      </List>
      <Pages>
        {pages.map((page: number, index: number) => currentPage === page ?
          <CurrentPage key={index} onClick={() => handleSetPage(page)} >{page}</CurrentPage>
          : <Page key={index} onClick={() => handleSetPage(page)}>{
            page === -1 ?
              <><Left /><Left /></>
              : page === 0 ?
                <><Right /><Right /></>
                : page}</Page>)}
      </Pages>
    </>
  )
}

export default TodoList;