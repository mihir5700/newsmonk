import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
      <Routes>
        <Route exact strict path="/"  element={<News category="general" key="general" />}/>
        <Route exact strict path="/business"  element={<News key="business" category="business" />}/>
        <Route exact strict path="/entertainment"  element={<News key="entertainment" category="entertainment" />}/>
        <Route exact strict path="/health"  element={<News key="health" category="health" />}/>
        <Route exact strict path="/science"  element={<News key="science" category="science" />}/>
        <Route exact strict path="/sports"  element={<News key="sports" category="sports" />}/>
        <Route exact strict path="/technology"  element={<News key="technology" category="technology" />}/>
      </Routes>
        
      </>
    )
  }
}
