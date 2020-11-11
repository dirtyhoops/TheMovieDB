import React from 'react';

const MoviePoster = props => {
  const { image } = props;
  return (
    <div className='movieinfobox2-poster'>
      <img src={image} alt='main poster' />
    </div>
  );
};

export default MoviePoster;
