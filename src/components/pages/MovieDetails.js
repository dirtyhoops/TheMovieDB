import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getMovie,
  getMovieImages,
  getMovieCredits,
  getSimilarMovies
} from "../../actions/movieActions";

import Actors from "../layout/Actors/Actors";
import SimilarMovies from "../layout/SimilarMovies/SimilarMovies";

import MovieInfoBox from "../layout/MovieInfoBox/MovieInfoBox";

class MovieDetails extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getMovie(id);
    this.props.getMovieImages(id);
    this.props.getMovieCredits(id);
    this.props.getSimilarMovies(id);
  }

  render() {
    const {
      title,
      overview,
      backdrop_path,
      poster_path
    } = this.props.selectedMovie;

    const { cast, crew } = this.props.movieCredits;

    const { similarMovies } = this.props;

    // @todo, make sure to manipulate this to produce three different posters

    // console.log(this.props.selectedMovieImages);

    return (
      <div>
        <MovieInfoBox selectedMovie={this.props.selectedMovie} />

        {/* <div
          className="overviewBoard"
          style={{
            backgroundImage: `url(${backgroundImage1})`
          }}
        >
          <div className="movieposters">
            <div className="row justify-content-md-center no-gutters pt-3">
              <div className="col col-lg-2 pt-5 text-center">
                <img
                  className="card-img-top posterImg1"
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt="poster image"
                />
              </div>
              <div className="col col-lg-2 pt-3 text-center">
                <img
                  className="card-img-top posterImg2"
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt="poster image"
                />
              </div>
              <div className="col col-lg-2 pt-5 text-center">
                <img
                  className="card-img-top posterImg1"
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt="poster image"
                />
              </div>
            </div>
          </div>

          <div className="row justify-content-md-center no-gutters titleandoverview">
            <div className="col col-lg-6 py-3 text-center">
              <h1>{title}</h1>
              <p>{overview}</p>
            </div>
          </div>
        </div> */}

        {/* start of the div under the background backdrop */}
        <div className="container-fluid moviegrossdiv">
          <div className="row justify-content-md-center">
            <div className="col col-sm-3">
              <p className="text-center">BUDGET</p>
            </div>
            <div className="col col-sm-3">
              <p className="text-center">GROSS</p>
            </div>
            <div className="col col-sm-3">
              <p className="text-center">RUNTIME</p>
            </div>
          </div>
        </div>

        <Actors cast={cast} />

        <h4>Similar Movies</h4>
        <SimilarMovies similarMovies={similarMovies} />
      </div>
    );
  }
}

MovieDetails.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  getMovie: PropTypes.func.isRequired,
  getMovieImages: PropTypes.func.isRequired,
  getMovieCredits: PropTypes.func.isRequired,
  getSimilarMovies: PropTypes.func.isRequired
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
)(MovieDetails);
