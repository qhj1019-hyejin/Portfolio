import style from './Header.module.css';
import { NavLink } from "react-router-dom";
import { useEffect,useState } from "react";

const MobileMenu = (props) => {

  // navLink active style
  const activeStyle= {
    color: 'var(--main-color)'
  }

  return (
    <div className={`mobile ${props.mobileMenu ? "showMenu" : "hideMenu"} ${style.mobileMenuWrap}`}>
        <nav className={style.mobileMenu}>
          <ul>
          <li>
              <NavLink to="/" 
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" 
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" 
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" 
                style={({ isActive }) =>
                isActive ? activeStyle : undefined
              }>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    )

}
export default MobileMenu;