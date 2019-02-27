import React from "react";
import { NavLink, Link } from "react-router-dom";

const mainNav = props => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
    <Link className="navbar-brand" to="/">
      Event Booking
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavAltMarkup"
      aria-controls="navbarNavAltMarkup"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to="/user">
          User
        </NavLink>
        <NavLink className="nav-item nav-link" to="/event">
          Event
        </NavLink>
        <NavLink className="nav-item nav-link" to="/booking">
          Booking
        </NavLink>
      </div>
    </div>
  </nav>
);

export default mainNav;
