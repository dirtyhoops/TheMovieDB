import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Movie = props => {
  const { id, poster_path, title, vote_average } = props.movie;

  return (
    <div className='movies-grid-box'>
      <Link to={`movie/${id}`}>
        <div className='carddimension'>
          <img
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original${poster_path}`
                : '/images/posternotfound.png'
            }
            alt='poster_image'
          />
          <div className='movieInfoHover'>
            <p className='movieInfoHover-average'>
              {vote_average} <i class='fas fa-star'></i>
            </p>
            <p className='movieInfoHover-title'>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Movie.propTypes = {
  movie: PropTypes.object.isRequired
};

export default Movie;
