import React, { useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav/Nav';
import SubNav from './components/SubNav/SubNav';
import {BrowserRouter as Router} from "react-router-dom"
import Pages from './components/Pages/Pages';
import mainReducer from './state/mainReducer';
import initialState from './state/appState';
import appContext from './state/appContext';
import getAllCategories from './api/category-api';
import { useDispatch } from 'react-redux';
import {loadCategories} from "./state/categorySlice" 

function App() {

  const appDispatch = useDispatch();
  

  useEffect(()=>{
    let setCategories = async ()=>{
      let cat = await getAllCategories();
      appDispatch(loadCategories(cat))
    }
    setCategories()
  },[])
  return (
      <div className="App">
        <Router>
          <Nav />
          <SubNav />
          <Pages />
        </Router>
      </div>
  );
}

export default App;
