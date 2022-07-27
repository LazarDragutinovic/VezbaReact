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
import { loadCategories } from './state/categoriesReducer';


function App() {

  let [state,dispatch] = useReducer(mainReducer,initialState);
  useEffect(()=>{
    let setCategories = async ()=>{
      let cat = await getAllCategories();
      dispatch(loadCategories(cat));
    }
    setCategories()
  },[])
  return (
    <appContext.Provider value={{state,dispatch}}>
      <div className="App">
        <Router>
          <Nav />
          <SubNav />
          <Pages />
        </Router>
      </div>
    </appContext.Provider>
  );
}

export default App;
