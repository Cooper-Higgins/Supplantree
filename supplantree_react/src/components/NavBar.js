import React, { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { PiTreeEvergreenBold } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./NavBar.css"
import LoginButton from "../LoginButton";
import { useAuth0 } from "@auth0/auth0-react"

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const { isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleLinkClickLog = (path) => {
    if (!isAuthenticated) {
      navigate("/login"); // Redirect to login page
    } else {
      navigate(path); // Go to the specified path
    }
  };

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
                  onClick={() => {
                    handleLinkClickLog("/my-trees")
                    closeMobileMenu()}}
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
                <LoginButton
                  to="/login"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                >
                  Login
                </LoginButton>
              </li>
            </ul>
          </div>
        </nav>
        </IconContext.Provider>
    </div>
  );
};

export default NavBar;
