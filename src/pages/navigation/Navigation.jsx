import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

import HouseLogo from "../../assets/house_icon.png";

import "./navigation.css";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation-container">
        <Link className="logo-container" to="/">
          <img
            src={HouseLogo}
            className="logo"
            alt="Meshell-Jackson Properties Logo"
          />
        </Link>
        <div className="nav-links">
          <Link className="nav-link" to="/">
            HOME
          </Link>
          <Link className="nav-link" to="rentals">
            RENTALS
          </Link>
          <Link className="nav-link" to="management">
            MANAGEMENT
          </Link>
          <Link className="nav-link" to="about">
            ABOUT
          </Link>
          <Link className="nav-link" to="contact">
            CONTACT
          </Link>
          <Link className="nav-link nav-book-button" to="rentals">
            BOOK WITH US
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
