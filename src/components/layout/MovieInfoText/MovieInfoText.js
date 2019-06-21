import React from "react";

import "./MovieInfoText.css";

const MovieInfoText = props => {
  const {
    title,
    genres,
    production_countries,
    runtime,
    vote_average,
    release_date,
    revenue,
    budget
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
              <i className="far fa-clock" /> {runtime} min &#8231;{" "}
              <i className="fas fa-play" /> Play Trailer
            </span>
          </p>
        ) : null}
        <p>Release Date: {release_date}</p>
        <p>Directed By: Gonna Fix This</p>
        <p>
          <i className="fa fa-money-bill-alt" /> Budget: {budget}
        </p>
        <p>
          <i className="fa fa-ticket-alt" /> Revenue: {revenue}
        </p>
      </div>
    </div>
  );
};
export default MovieInfoText;
