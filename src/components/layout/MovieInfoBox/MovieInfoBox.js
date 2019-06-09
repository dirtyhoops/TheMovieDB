import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Spinner/Spinner";

import "./MovieInfoBox.css";

class MovieInfoBox extends Component {
  render() {
    const { selectedMovie } = this.props;
    const { selectedMovieImages } = this.props;

    const backgroundImage = `https://image.tmdb.org/t/p/w1280${
      selectedMovie.backdrop_path
    }`;

    console.log("here's the selected movie images, ", selectedMovieImages);

    return (
      <div
        className="wrapper-movieinfobox"
        style={{
          background: selectedMovie.backdrop_path
            ? `url(${backgroundImage})`
            : "#fff"
        }}
      >
        <div className="movieinfobox-content">
          <div className="movieposters">
            <div className="row justify-content-md-center no-gutters pt-3">
              <div className="col col-lg-2 pt-5 text-center">
                <img
                  className="card-img-top posterImg1"
                  src={`https://image.tmdb.org/t/p/original${
                    selectedMovie.poster_path
                  }`}
                  alt="poster image"
                />
              </div>
              <div className="col col-lg-2 pt-3 text-center">
                <img
                  className="card-img-top posterImg2"
                  src={`https://image.tmdb.org/t/p/original${
                    selectedMovie.poster_path
                  }`}
                  alt="poster image"
                />
              </div>
              <div className="col col-lg-2 pt-5 text-center">
                <img
                  className="card-img-top posterImg1"
                  src={`https://image.tmdb.org/t/p/original${
                    selectedMovie.poster_path
                  }`}
                  alt="poster image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MovieInfoBox.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  selectedMovieImages: PropTypes.array.isRequired
};

export default connect(null)(MovieInfoBox);
