import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MoviePoster from "../MoviePoster/MoviePoster";
import MovieInfoText from "../MovieInfoText/MovieInfoText";

import "./MovieInfoBox.css";

class MovieInfoBox extends Component {
  render() {
    const { selectedMovie } = this.props;

    const backgroundImage = `https://image.tmdb.org/t/p/w1280${
      selectedMovie.backdrop_path
    }`;

    return (
      <div>
        <div
          className="wrapper-movieinfobox"
          style={{
            background: selectedMovie.backdrop_path
              ? `url(${backgroundImage})`
              : "#fff"
          }}
        />
        <div className="movieinfobox-content">
          <MoviePoster
            image={
              selectedMovie.poster_path
                ? `https://image.tmdb.org/t/p/w342${selectedMovie.poster_path}`
                : "/images/posternotfound.png"
            }
          />

          <MovieInfoText movieInfo={selectedMovie} />

          <div className="movie-overview">
            <h6>Overview</h6>
            <p>{selectedMovie.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

MovieInfoBox.propTypes = {
  selectedMovie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedMovie: state.movie.selectedMovie
});

export default connect(mapStateToProps)(MovieInfoBox);
