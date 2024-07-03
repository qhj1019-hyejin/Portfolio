import { NavLink } from "react-router-dom";
import style from './Header.module.css';
import MobileMenu from "./mobileMenu";
import { useState,useEffect } from "react";
import { useLocation } from 'react-router-dom';

const Header = (props) => {

  const [mobileMenu, setMobileMenu] = useState(false);  // 모바일 메뉴 초기값 false
  const { pathname } = useLocation();

  // navLink active style
  const activeStyle= {
      color: 'var(--main-color)'
  }

  // url 변경 시 모바일 메뉴 닫기
  useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  const toggleMenu  = () => {
    setMobileMenu(mobileMenu => !mobileMenu); // on , off
  }

  return (
      <header>
        <div className={style.headerInner}>
          <h1><NavLink to="/">I'm hyejin</NavLink></h1>
            <nav className="pc">
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
            <div className={`mobile ${style.menu} ${mobileMenu ? "mobileMenuOff" : ""} `} onClick={()=>toggleMenu()} >
              <span></span>
              <span></span>
              <span></span>
            </div>
        </div>
        {
          mobileMenu == true ? <MobileMenu mobileMenu={mobileMenu} /> : null // 모바일 메뉴
        }
      </header>
  )
}
export default Header;