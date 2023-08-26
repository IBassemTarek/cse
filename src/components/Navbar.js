import { Component } from "react";
import { MenuData } from "./MenuData";
import Logo from "../assets/imgs/cse_logo.png";
import "./NavbarStyles.css";
import "../index.css";

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
              <li key={index}>
                <a href={item.url} className={item.className}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <h6 className="h6-style">تسجيل الخروج</h6>
      </nav>
    );
  }
}

export default Navbar;
