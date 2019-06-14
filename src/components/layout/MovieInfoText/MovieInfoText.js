import React from "react";

import "./MovieInfoText.css";

const MovieInfoText = props => {
  const {
    title,
    overview,
    // genres,
    // production_countries,
    runtime,
    vote_average
  } = props.movieInfo;

  return (
    <div>
      <h1>
        {title} ({vote_average}
        <i className="fas fa-star" />)
      </h1>
      <p>
        US &#8231; Action &#8231;
        <span> </span>
        <i className="far fa-clock" /> {runtime} min
      </p>
      <p>{overview}</p>
    </div>
  );
};
export default MovieInfoText;
