import React, { Component } from "react";
import { Link } from "react-router-dom";

class Sidebar extends Component {
  render() {
    return (
      <nav id="sidebar">
        <div className="sidebar-header">
          <h3>Genres</h3>
        </div>

        <ul className="list-unstyled components">
          <li>
            <a href="#">Action</a>
          </li>
          <li>
            <a href="#">Animation</a>
          </li>
          <li>
            <a href="#">Adventure</a>
          </li>
          <li>
            <a href="#">Comedy</a>
          </li>
          <li>
            <a href="#">Crime</a>
          </li>
          <li>
            <a href="#">Documentary</a>
          </li>
          <li>
            <a href="#">Drama</a>
          </li>
          <li>
            <a href="#">Family</a>
          </li>
          <li className="active">
            <a href="#">Fantasy</a>
          </li>
          <li>
            <a href="#">History</a>
          </li>
          <li>
            <a href="#">Mystery</a>
          </li>
          <li>
            <a href="#">Romance</a>
          </li>
          <li>
            <a href="#">Science fiction</a>
          </li>
          <li>
            <a href="#">Thriller</a>
          </li>
          <li>
            <a href="#">War</a>
          </li>
          <li>
            <a href="#">Western</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Sidebar;
