import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./SimilarMovies.css";

class SimilarMovies extends Component {
  render() {
    const { similarMovies } = this.props;

    // @todo: make a function that will dispatch on click

    return (
      <div className="wrapper-similarMovie container-fluid">
        <div className="header-similarMovie">
          <h3>Similar Movie</h3>
        </div>
        <div className="row">
          {similarMovies.slice(0, 8).map((similarMovie, index) => (
            <div key={index} className="col-4 col-sm-4 col-md-3 col-lg-2 my-2">
              <Link
                to={`/movie/${similarMovie.id}`}
                onClick={() => this.props.onClick(similarMovie.id)}
              >
                <div className="card carddimension">
                  <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/original${
                      similarMovie.backdrop_path
                    }`}
                    alt="poster-img"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

SimilarMovies.propTypes = {
  similarMovies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  similarMovies: state.movie.similarMovies
});

export default connect(mapStateToProps)(SimilarMovies);
