import React from "react";

import "./MovieInfoText.css";

const MovieInfoText = props => {
  const {
    title,
    overview,
    genres,
    production_countries,
    runtime,
    vote_average
  } = props.movieInfo;

  return (
    <div>
      <h1>
        {title} ({vote_average}
        <i className="fas fa-star" />)
      </h1>
      <div className="genreTestingdeletethislater">
        {genres ? (
          <p>
            {genres.map((genre, index) => (
              <span key={index}>{genre.name}, </span>
            ))}
          </p>
        ) : null}
        {production_countries ? (
          <p>
            <span>
              {production_countries[0].iso_3166_1} &#8231;{" "}
              <i className="far fa-clock" /> {runtime} min
            </span>
          </p>
        ) : null}
      </div>
    </div>
  );
};
export default MovieInfoText;
