import React from "react";
import { NavLink, Link } from "react-router-dom";

import AuthContext from "../../context/Auth";

const mainNav = props => (
  <AuthContext.Consumer>
    {context => {
      return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
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
          <div
            id="navbarNavAltMarkup"
            className="navbar-collapse"
            style={{ justifyContent: "flex-end" }}
          >
            <div className="navbar-nav">
              {!context.token && (
                <NavLink className="nav-item nav-link" to="/user">
                  Authenticate
                </NavLink>
              )}
              <NavLink className="nav-item nav-link" to="/event">
                Event
              </NavLink>
              {context.token && (
                <React.Fragment>
                  <NavLink className="nav-item nav-link" to="/booking">
                    Booking
                  </NavLink>
                  <NavLink
                    className="nav-item nav-link"
                    to="/user"
                    onClick={context.logout}
                  >
                    Logout
                  </NavLink>
                </React.Fragment>
              )}
            </div>
          </div>
        </nav>
      );
    }}
  </AuthContext.Consumer>
);

export default mainNav;
