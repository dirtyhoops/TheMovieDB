import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./PersonMovies.css";

const PersonMovie = props => {
  const { id, character, title, poster_path } = props.personMovie;
  return (
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 px-1 py-2">
      <Link
        to={`/movie/${id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div className="personmovie-image-container">
          <div className="personmovie-image">
            <img
              className="card"
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w342${poster_path}`
                  : "/images/posternotfound.png"
              }
              alt="poster_image"
            />
          </div>
          <div className="personmovie-text">
            <h6>{title}</h6>
            <p>as {character}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

PersonMovie.propTypes = {
  personMovie: PropTypes.array.isRequired
};

export default PersonMovie;
