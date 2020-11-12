import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './SimilarMovies.css';

class SimilarMovies extends Component {
  render() {
    const { similarMovies } = this.props;

    return (
      <div className='similarMovies-wrapper'>
        <div className='similarMovies-container container'>
          {similarMovies.length > 0 && (
            <div className='similarMovies-header'>
              <p>SIMILAR MOVIES</p>
            </div>
          )}

          <div className='similarMovies-grid'>
            {similarMovies.slice(0, 8).map((similarMovie, index) => (
              <div key={index} className='similarMovies-grid-box'>
                <Link
                  to={`/movie/${similarMovie.id}`}
                  onClick={() => this.props.onClick(similarMovie.id)}
                >
                  <div className='similarMovies-card'>
                    <img
                      src={`https://image.tmdb.org/t/p/original${similarMovie.backdrop_path}`}
                      alt='poster-img'
                    />
                  </div>
                  <div className='similarMovies-info'>
                    <p className='similarMovies-text-title'>
                      {similarMovie.title}
                    </p>

                    <p className='similarMovies-text-average'>
                      {similarMovie.vote_average}
                      <span>
                        <i class='far fa-star span-star2'></i>
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
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
