import React from "react";
import "./MoreButton.css";

const MoreButton = props => {
  return (
    <div className="wrapper-morebutton">
      <button className="btn btn-block btn-info btn-lg" onClick={props.onClick}>
        Load More Movies
      </button>
    </div>
  );
};

export default MoreButton;
