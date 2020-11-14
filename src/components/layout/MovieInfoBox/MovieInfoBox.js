import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviePoster from '../MoviePoster/MoviePoster';
import MovieInfoText from '../MovieInfoText/MovieInfoText';

import './MovieInfoBox.css';

class MovieInfoBox extends Component {
  render() {
    const {
      selectedMovie,
      selectedMovieTrailerLink,
      selectedMovieCrew
    } = this.props;

    const backgroundImage = `https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}`;

    return (
      <div className='movieinfobox-wrapper'>
        {/* <div
          className='wrapper-movieinfobox'
          style={{
            background: selectedMovie.backdrop_path
              ? `url(${backgroundImage})`
              : '#fff'
          }}
        />
        <div className='movieinfobox-content'>
          <MoviePoster
            image={
              selectedMovie.poster_path
                ? `https://image.tmdb.org/t/p/w342${selectedMovie.poster_path}`
                : '/images/posternotfound.png'
            }
          />

          <MovieInfoText
            movieInfo={selectedMovie}
            movieTrailer={selectedMovieTrailerLink}
            movieCrew={selectedMovieCrew}
          />

          <div className='movie-overview'>
            <h6>Overview</h6>
            <p>{selectedMovie.overview}</p>
          </div>
        </div> */}

        <div className='movieinfobox2-content container'>
          <MoviePoster
            image={
              selectedMovie.poster_path
                ? `https://image.tmdb.org/t/p/w342${selectedMovie.poster_path}`
                : '/images/posternotfound.png'
            }
          />
          <MovieInfoText
            movieInfo={selectedMovie}
            movieTrailer={selectedMovieTrailerLink}
            movieCrew={selectedMovieCrew}
          />
        </div>

        {selectedMovie.overview !== '' ? (
          <div className='movieinfobox2-overview-small'>
            <p className='movieinfobox2-text-overviewheader'>Overview</p>
            <p className='movieinfobox2-text-overview-sm'>
              {selectedMovie.overview}
            </p>
          </div>
        ) : null}
      </div>
    );
  }
}

MovieInfoBox.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  selectedMovieTrailerLink: PropTypes.array.isRequired,
  selectedMovieCrew: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  selectedMovie: state.movie.selectedMovie,
  selectedMovieTrailerLink: state.movie.selectedMovieTrailerLink,
  selectedMovieCrew: state.movie.movieCredits
});

export default connect(mapStateToProps)(MovieInfoBox);
