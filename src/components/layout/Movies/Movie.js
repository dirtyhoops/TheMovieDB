import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Movie = props => {
  const { id, poster_path, title, vote_average } = props.movie;

  return (
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 px-1 py-1">
      <Link to={`movie/${id}`}>
        <div className="card carddimension">
          <img
            className="card-img-top"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : "/images/posternotfound.png"
            }
            alt="poster_image"
          />
          <div class="movieInfoHover">
            <h6>
              {title} ({vote_average}/10)
            </h6>
          </div>
        </div>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
