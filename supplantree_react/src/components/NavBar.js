import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { PiTreeEvergreenBold } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./NavBar.css"

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
        {/* IconContext changes icons from default black to white, as background is black */}
        <IconContext.Provider value={{ color: "#ffffffc5" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            {/* Logo routes to home and closes mobile menu when clicked */}
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <PiTreeEvergreenBold className="navbar-icon" />
              Supplantree
            </Link>
            {/* Switches burger between bars when inactive and cross when active */}
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            {/* Route links with highlight effect when active */}
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/learn"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Learn
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/plant"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Plant
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/my-trees"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Trees
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/account"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Account
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        </IconContext.Provider>
    </div>
  );
};

export default NavBar;
