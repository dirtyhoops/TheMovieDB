import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Movie extends Component {
  render() {
    const { id, title, vote_average, poster_path } = this.props.movie;

    return (
      <div className="col-4 col-sm-4 col-md-3 col-lg-2">
        <Link to={`movie/${id}`}>
          <div className="card carddimension">
            <img
              className="card-img-top"
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt="poster image"
            />
          </div>
        </Link>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default connect(null)(Movie);
