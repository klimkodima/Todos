import React, { useEffect, Fragment } from "react";
import { useDispatch } from 'react-redux';
import { Route, Navigate, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "./components/Home";
import Todos from "./components/Todos";
import AppBar from "./components/AppBar";
import Footer from "./components/Footer";
import { initializeTodos } from './reducers/todosReducer';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeTodos());
  }, [dispatch]);

  return (
    <Fragment>
      <GlobalStyle />
      <AppBar />
      <main>
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/todos" element={<Todos/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
      <Footer />
    </Fragment>
  );
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SFNS Display';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/_helveticaneuedeskinterface_regular.ttf');
  }
  *{
      margin: 0;
      padding: 0;
      outline:0;
      text-align: center;
      box-sizing:border-box;
      font-family: SFNS Display;
      font-style: normal;
      font-weight: normal;
      font-size: 1vw; 
  }
  #root{
      margin:0 auto;
  }
  main{
    height: 86vh;
  }
  .success{
    color: green;
    font-size: 1vw;
  }
`;
export default App;
