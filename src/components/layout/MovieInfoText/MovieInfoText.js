import React from 'react';
import { calcTime, convertMoney } from '../../../helpers';

const MovieInfoText = props => {
  const {
    title,
    genres,
    production_countries,
    runtime,
    vote_average,
    release_date,
    revenue,
    budget,
    overview
  } = props.movieInfo;

  const { movieTrailer } = props;

  const { crew } = props.movieCrew;

  var directors = [];

  return (
    <div className='movieinfobox2-text'>
      <div className='movieinfobox2-text-header'>
        <p className='movieinfobox2-text-title'>{title}</p>
        <p className='movieinfobox2-text-star'>
          {vote_average}
          <span class='span-star'>
            <i class='far fa-star'></i>
          </span>
        </p>
      </div>

      {genres ? (
        <p className='movieinfobox2-text-genre'>
          {genres.map((genre, index) => (
            <span key={index}>
              {genre.name}
              {genres.length !== index + 1 ? <span>, </span> : null}
            </span>
          ))}
        </p>
      ) : null}

      {production_countries ? (
        <p className='movieinfobox2-text-country'>
          {production_countries.length > 0 ? (
            <span> {production_countries[0].iso_3166_1} &#8231; </span>
          ) : null}
          <span className='span-clock'>
            <i className='far fa-clock' />
          </span>{' '}
          {calcTime(runtime)} &#8231; <span>{release_date}</span>
        </p>
      ) : null}

      <p className='movieinfobox2-text-overview'> {overview}</p>
      {crew
        ? crew.forEach(function (entry) {
            if (entry.job === 'Director') {
              directors.push(entry.name);
            }
          })
        : null}
      <p className='movieinfobox2-text-director'>
        Directed By: {directors.join(', ')}
      </p>
      <p className='movieinfobox2-text-director'>
        <span className='span-bill'>
          <i className='fa fa-money-bill-alt' />
        </span>{' '}
        Budget: {convertMoney(budget)}
      </p>
      <p className='movieinfobox2-text-director'>
        <span className='span-bill'>
          <i className='fa fa-ticket-alt' />
        </span>{' '}
        Revenue: {convertMoney(revenue)}
      </p>

      {movieTrailer[0] ? (
        <button
          className='button-trailer'
          onClick={() =>
            (window.location.href = `https://www.youtube.com/watch?v=${movieTrailer[0].key}`)
          }
        >
          <i className='fas fa-play' /> Play Trailer
        </button>
      ) : null}
    </div>
  );
};
export default MovieInfoText;
