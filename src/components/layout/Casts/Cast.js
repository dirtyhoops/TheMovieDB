import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Cast.css';

const Cast = props => {
  const { character, name, profile_path, id } = props.cast;

  return (
    <div className='actors-grid-box'>
      <Link
        to={`/person/${id}`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <div className='actors-card'>
          <img
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/original${profile_path}`
                : '/images/noimage.png'
            }
            alt='cast-img'
          />

          <div className='actors-card-info'>
            <p className='actors-text-name'>{name}</p>
            <p className='actors-text-char'>{character}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.object.isRequired
};

export default Cast;
