import React from "react";
import "./Grid.css";
import Movies from "../../movies/Movies";

const Grid = props => {
  return (
    <div className="wrapper-grid">
      <div className="grid-content">
        <div className="row">
          <div className="col col-md-12">
            <Movies />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
