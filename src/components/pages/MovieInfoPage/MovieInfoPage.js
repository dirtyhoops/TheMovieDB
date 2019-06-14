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
import Actors from "../../layout/Casts/Casts";
import NavBar from "../../layout/NavBar/NavBar";
import "./MovieInfoPage.css";
import SimilarMovies from "../../layout/SimilarMovies/SimilarMovies";

class MovieInfoPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
    this.props.getMovieImages(id);
    this.props.getMovieCredits(id);
    this.props.getSimilarMovies(id);
  }

  selectSimilarMovie = id => {
    this.props.getMovie(id);
    // this.props.getMovieImages(id);
    this.props.getMovieCredits(id);
    this.props.getSimilarMovies(id);
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper-movieinfopage">
          <NavBar />
          <MovieInfoBox />
          <Actors />
          <SimilarMovies onClick={this.selectSimilarMovie} />
        </div>
      </React.Fragment>
    );
  }
}

MovieInfoBox.propTypes = {
  getMovie: PropTypes.func,
  getMovieImages: PropTypes.func,
  getMovieCredits: PropTypes.func,
  getSimilarMovies: PropTypes.func
};

const mapStateToProps = state => ({
  similarMovies: state.movie.similarMovies
});

export default connect(
  mapStateToProps,
  { getMovie, getMovieImages, getMovieCredits, getSimilarMovies }
)(MovieInfoPage);
