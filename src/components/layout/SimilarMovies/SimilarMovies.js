import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class SimilarMovies extends Component {
  render() {
    const { similarMovies } = this.props;

    // @todo: make a function that will dispatch on click
    return (
      <div className="row">
        {similarMovies.slice(0, 8).map(similarMovie => (
          <div className="col-4 col-sm-4 col-md-3 col-lg-2">
            <Link to={`/movie/${similarMovie.id}`}>
              <div className="card carddimension">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/original${
                    similarMovie.backdrop_path
                  }`}
                  alt="poster image"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    );
  }
}

SimilarMovies.propTypes = {
  similarMovies: PropTypes.array.isRequired
};

export default connect(null)(SimilarMovies);
