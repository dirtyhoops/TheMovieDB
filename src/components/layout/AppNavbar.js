import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PropTypes from "prop-types";

class AppNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            TheMovieDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppNavbar;
