import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../Spinner/Spinner';

import Movie from './Movie';
import './Movies.css';

class Movies extends Component {
  render() {
    // deconstruct movies from the props
    const { movies } = this.props;

    if (movies) {
      return (
        <div className='wrapper-movies'>
          <div className='movies-container container'>
            <div className='movies-header'>
              <p>{this.props.movieHeader}</p>
            </div>
            <div className='movies-grid'>
              {movies.map(movie => (
                <Movie key={movie.id} movie={movie} />
              ))}
              {movies.length % 6 === 1 && (
                <>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                </>
              )}

              {movies.length % 6 === 2 && (
                <>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                </>
              )}

              {movies.length % 6 === 3 && (
                <>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                </>
              )}

              {movies.length % 6 === 4 && (
                <>
                  <div className='movies-grid-spacer'></div>
                  <div className='movies-grid-spacer'></div>
                </>
              )}

              {movies.length % 6 === 5 && (
                <>
                  <div className='movies-grid-spacer'></div>
                </>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Movies.propType = {
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.movie.movies
});

export default connect(mapStateToProps)(Movies);
