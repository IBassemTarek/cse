import { Component } from 'react';
import { MenuData } from './MenuData';
import Logo from '../assets/imgs/cse_logo.png';
import './NavbarStyles.css';
import '../index.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="NavbarItems">
        <div className="logo-navbar">
          <img className="logo-navbar-logo-image" src={Logo} alt="logo" />
          <span className="logo-navbar-logo-text">CSE</span>
        </div>
        <ul className="nav-menu">
          {MenuData.map((item, index) => {
            return (
              <Link to={item.url}>
                <li key={index}>
                  <a href={item.url} className={item.className}>
                    {item.title}
                  </a>
                </li>
              </Link>
            );
          })}
        </ul>
        <Link to={'/login'}>
          <h6 className="h6-style">تسجيل الخروج</h6>
        </Link>
      </nav>
    );
  }
}

export default Navbar;
