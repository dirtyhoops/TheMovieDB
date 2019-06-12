import React from "react";

import "./MoviePoster.css";

const MoviePoster = props => {
  const { image } = props;
  return (
    <div>
      <img src={image} alt="main poster" />
    </div>
  );
};

export default MoviePoster;
