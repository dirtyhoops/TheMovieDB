import React, { Component } from "react";
import classnames from "classnames";

import Movies from "../movies/Movies";
import Sidebar from "./Sidebar";
import HeroImage from "./HeroImage/HeroImage";

class MoviesBoard extends Component {
  state = {
    showSidebar: false
  };

  render() {
    const { showSidebar } = this.state;
    return (
      <div className="row">
        {showSidebar ? (
          <div className="col-md-2">
            <Sidebar />
          </div>
        ) : null}

        <div
          className={classnames({
            "col-md-10": showSidebar,
            "col-md-12": !showSidebar
          })}
        >
          <button
            className="btn btn-dark"
            onClick={() =>
              this.setState({ showSidebar: !this.state.showSidebar })
            }
          >
            <i className="fas fa-angle-double-left" />
          </button>
          <HeroImage />
          <Movies />
        </div>
      </div>
    );
  }
}

export default MoviesBoard;

// @todo
// 1. make sure there's a collapsible sidebar for catergories. maybe in a row col-md-10 for the main movie list and col-md-2 for the sidebar
