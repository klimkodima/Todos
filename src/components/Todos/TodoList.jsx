import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import TodoItem from './TodoItem';
import { fetchPageNumbers } from '../../utils/fetchPageNumbers';


const List = styled.div`
  height: 60vh;
  width: 100%;
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

  const PAGE_LIMIT = 6;
  const PAGE_NEIGHBOURS = 2;

  const todos = useSelector(state => {
    switch (state.filter) {
      case 'completed':
        return state.todos.filter(todo => todo.completed === true);
      case 'active':
        return state.todos.filter(todo => todo.completed === false);
      default:
        return state.todos;
    }
  });

  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = todos.length;
  
  const [page, setPage] = useState([]);
  const [pages, setPages] = useState([]);
  
  const totalPages = Math.ceil(totalCount / PAGE_LIMIT);

  useEffect(() => {
   const pages = fetchPageNumbers(totalPages, currentPage, PAGE_NEIGHBOURS);
   setPages(pages);
   const offset = (currentPage - 1) * PAGE_LIMIT;
   const page = todos.slice(offset, offset + PAGE_LIMIT);
   setPage(page);
  }, [currentPage, todos, totalPages]);

  const handleSetPage = (page) => {
    switch(page) {
      case 'LEFT':
        setCurrentPage(currentPage - PAGE_NEIGHBOURS * 2 - 1);
        break;
      case 'RIGHT':
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
          .map(todo =>
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        }
      </List>
      <Pages>
        {pages.map((page, index) => currentPage === page ?
         <CurrentPage key={index} onClick={() =>handleSetPage(page)} >{page}</CurrentPage>
         :<Page key={index} onClick={() =>handleSetPage(page)}>{page}</Page>)}
      </Pages>
    </>
  )
}

export default TodoList;