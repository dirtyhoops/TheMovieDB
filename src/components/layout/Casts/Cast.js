import React from "react";
import PropTypes from "prop-types";
import "./Cast.css";

const Cast = props => {
  const { character, name, profile_path } = props.cast;

  return (
    <div className="col-4 col-sm-3 col-md-3 col-lg-2 my-2">
      <div className="wrapper-card">
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/original${profile_path}`
              : "/images/noimage.png"
          }
          alt="cast-img"
        />

        <div className="container-card">
          <h6>{name}</h6>
          <p>{character}</p>
        </div>
      </div>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.object.isRequired
};

export default Cast;
