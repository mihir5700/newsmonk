import React, { Component } from 'react'
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News pageSize={6}/>
      </>
    )
  }
}
