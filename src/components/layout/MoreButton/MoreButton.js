import React from "react";

const MoreButton = props => {
  return (
    <div className="wrapper-morebutton">
      <button className="btn btn-primary" onClick={props.onClick}>
        Load More Movies
      </button>
    </div>
  );
};

export default MoreButton;
