import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getMovie,
  getMovieCredits,
  getSimilarMovies,
  getMovieReviews,
  getSelectedMovieTrailerLink
} from "../../../actions/movieActions";

import MovieInfoBox from "../../layout/MovieInfoBox/MovieInfoBox";
import Actors from "../../layout/Casts/Casts";
import NavBar from "../../layout/NavBar/NavBar";
import "./MovieInfoPage.css";
import SimilarMovies from "../../layout/SimilarMovies/SimilarMovies";
import Reviews from "../../layout/Reviews/Reviews";

class MovieInfoPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.selectMovie(id);
  }

  selectMovie = id => {
    this.props.getMovie(id);
    this.props.getMovieCredits(id);
    this.props.getSimilarMovies(id);
    this.props.getMovieReviews(id);
    this.props.getSelectedMovieTrailerLink(id);
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper-movieinfopage">
          <NavBar />
          <MovieInfoBox />
          <Actors />
          <SimilarMovies onClick={this.selectMovie} />
          <Reviews />
        </div>
      </React.Fragment>
    );
  }
}

MovieInfoBox.propTypes = {
  getMovie: PropTypes.func,
  getMovieCredits: PropTypes.func,
  getSimilarMovies: PropTypes.func,
  getMovieReviews: PropTypes.func,
  getSelectedMovieTrailerLink: PropTypes.func
};

export default connect(
  null,
  {
    getMovie,
    getMovieCredits,
    getSimilarMovies,
    getMovieReviews,
    getSelectedMovieTrailerLink
  }
)(MovieInfoPage);
