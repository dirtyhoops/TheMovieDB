import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./SimilarMovies.css";

class SimilarMovies extends Component {
  render() {
    const { similarMovies } = this.props;

    return (
      <div className="wrapper-similarMovies container-fluid">
        <div className="header-similarMovies">
          <h3>Similar Movies</h3>
        </div>

        <div className="row">
          {similarMovies.slice(0, 8).map((similarMovie, index) => (
            <div key={index} className="col-4 col-sm-4 col-md-3 col-lg-3 my-2">
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
                <div className="card-info-text">
                  <div className="movie-title-text">
                    <h6>{similarMovie.title}</h6>
                  </div>
                  <div className="movie-rating-text">
                    <h6>{similarMovie.vote_average}</h6>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* <div className="row">
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
        </div> */}
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
