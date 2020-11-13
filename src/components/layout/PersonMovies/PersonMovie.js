import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './PersonMovies.css';

const PersonMovie = props => {
  const { id, character, title, poster_path } = props.personMovie;
  return (
    <div className='personmovie-grid-box'>
      <Link
        to={`/movie/${id}`}
        style={{ textDecoration: 'none', color: 'white' }}
      >
        <div className='personmovie-carddimension'>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w342${poster_path}`
                : '/images/posternotfound.png'
            }
            alt='poster_image'
          />

          <div className='personmovie-text'>
            <p className='personmovie-text-title'>{title}</p>
            <p className='personmovie-text-role'>as {character}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

PersonMovie.propTypes = {
  personMovie: PropTypes.object.isRequired
};

export default PersonMovie;
