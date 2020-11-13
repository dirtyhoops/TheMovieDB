import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import PersonMovie from './PersonMovie';
import './PersonMovies.css';

class PersonMovies extends Component {
  render() {
    const { selectedPersonMovies } = this.props;
    if (selectedPersonMovies) {
      return (
        <div className='personmovie-wrapper'>
          <div className='personmovie-container container'>
            <div className='personmovie-header'>
              <h2>Movie Roles</h2>
            </div>
            <div className='personmovie-grid'>
              {selectedPersonMovies.map(personMovie => (
                <PersonMovie key={personMovie.id} personMovie={personMovie} />
              ))}
              {selectedPersonMovies.length % 6 === 1 && (
                <>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                </>
              )}

              {selectedPersonMovies.length % 6 === 2 && (
                <>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                </>
              )}

              {selectedPersonMovies.length % 6 === 3 && (
                <>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                </>
              )}

              {selectedPersonMovies.length % 6 === 4 && (
                <>
                  <div className='personmovie-grid-spacer'></div>
                  <div className='personmovie-grid-spacer'></div>
                </>
              )}

              {selectedPersonMovies.length % 6 === 5 && (
                <>
                  <div className='personmovie-grid-spacer'></div>
                </>
              )}
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

PersonMovies.propTypes = {
  selectedPersonMovies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  selectedPersonMovies: state.movie.selectedPersonMovieCredits
});

export default connect(mapStateToProps)(PersonMovies);
