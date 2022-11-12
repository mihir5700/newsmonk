import React, { Component } from 'react'
import { NavLink } from "react-router-dom";


export class Navbar extends Component {


  render() {
    return (
      <nav className='d-flex navbox justify-content-between'>

        <div className="nav-logo d-flex justify-content-center mx-2 px-3 p-1">
            <img src="https://cdn-icons-png.flaticon.com/512/3020/3020580.png" alt="" width="31" height="31" />
            <h3 className=''>NewsMonk</h3>
        </div>

        <div className="nav-container-links d-flex mx-4">
            <NavLink className={({ isActive }) => isActive ? 'nav-active nav-item' : 'nav-item'} to="/">Home</NavLink>
            <NavLink className="nav-item" to="/">About</NavLink>
            <NavLink className="nav-item" to="/">Contact</NavLink>
        </div>
        
      </nav>
    )
  }
}

export default Navbar
