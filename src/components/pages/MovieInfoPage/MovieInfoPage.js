import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getMovie,
  getMovieImages,
  getMovieCredits,
  getSimilarMovies
} from "../../../actions/movieActions";

import MovieInfoBox from "../../layout/MovieInfoBox/MovieInfoBox";
import Spinner from "../../layout/Spinner/Spinner";
import Actors from "../../layout/Actors/Actors";
import "./MovieInfoPage.css";

class MovieInfoPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
    this.props.getMovieImages(id);
    this.props.getMovieCredits(id);
    this.props.getSimilarMovies(id);
  }

  render() {
    const { selectedMovie } = this.props;
    const { cast, crew } = this.props.movieCredits;
    const { selectedMovieImages } = this.props;

    if (selectedMovie) {
      return (
        <React.Fragment>
          <div className="wrapper-movieinfopage">
            <MovieInfoBox
              selectedMovie={selectedMovie}
              selectedMovieImages={selectedMovieImages}
            />
            <Actors cast={cast} />
          </div>
        </React.Fragment>
      );
    } else {
      return <Spinner />;
    }
  }
}

MovieInfoBox.propTypes = {
  selectedMovie: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedMovie: state.movie.selectedMovie,
  selectedMovieImages: state.movie.selectedMovieImages,
  movieCredits: state.movie.movieCredits,
  similarMovies: state.movie.similarMovies
});

export default connect(
  mapStateToProps,
  { getMovie, getMovieImages, getMovieCredits, getSimilarMovies }
)(MovieInfoPage);
