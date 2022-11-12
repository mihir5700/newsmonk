import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Categories extends Component {
  render() {
    return (
      <div className='sidebar-categories'>
        <NavLink to='/' rel="noreferrer" className={({ isActive }) => isActive ? 'active-categories-items categories-item' : 'categories-item'}>Daily News</NavLink>
        <NavLink to='/business' rel="noreferrer" className={({ isActive }) => isActive ? 'active-categories-items categories-item' : 'categories-item'}>Business</NavLink>
        <NavLink to='/entertainment' rel="noreferrer" className={({ isActive }) => isActive ? 'active-categories-items categories-item' : 'categories-item'}>Entertainment</NavLink>
        <NavLink to='/health' rel="noreferrer" className={({ isActive }) => isActive ? 'active-categories-items categories-item' : 'categories-item'}>Health</NavLink>
        <NavLink to='/science' rel="noreferrer" className={({ isActive }) => isActive ? 'active-categories-items categories-item' : 'categories-item'}>Science</NavLink>
        <NavLink to='/sports' rel="noreferrer" className={({ isActive }) => isActive ? 'active-categories-items categories-item' : 'categories-item'}>Sports</NavLink>
        <NavLink to='/technology' rel="noreferrer" className={({ isActive }) => isActive ? 'active-categories-items categories-item' : 'categories-item'}>Technology</NavLink>
      </div>
    )
  }
}
