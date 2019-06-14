import React from "react";
import PropTypes from "prop-types";
import "./Cast.css";

const Cast = props => {
  const { character, name, profile_path } = props.cast;

  return (
    <div className="col-4 col-sm-4 col-md-3 col-lg-2 mx-3 my-3">
      <div className="card text-center">
        <img
          className="card-img-top"
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original${profile_path}`
              : "/images/noimage.png"
          }
          alt="cast-img"
        />
        <div className="card-body">
          <p className="card-text font-weight-bold">{name}</p>
          <p className="card-text">{character}</p>
        </div>
      </div>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.object.isRequired
};

export default Cast;
