import React from "react";
import { calcTime, convertMoney } from "../../../helpers";

const MovieInfoText = props => {
  const {
    title,
    genres,
    production_countries,
    runtime,
    vote_average,
    release_date,
    revenue,
    budget
  } = props.movieInfo;

  const { movieTrailer } = props;

  const { crew } = props.movieCrew;

  var directors = [];

  return (
    <div className="movieinfobox-text">
      <h1>
        {title} ({vote_average}
        <span className="span-star">
          <i className="fas fa-star" />
        </span>
        )
      </h1>

      {genres ? (
        <p>
          {genres.map((genre, index) => (
            <span key={index}>
              {genre.name}
              {genres.length !== index + 1 ? <span>, </span> : null}
            </span>
          ))}
        </p>
      ) : null}
      {production_countries ? (
        <p>
          {production_countries.length > 0 ? (
            <span> {production_countries[0].iso_3166_1} &#8231; </span>
          ) : null}
          <i className="far fa-clock" /> {calcTime(runtime)}{" "}
          {movieTrailer[0] ? (
            <a href={`https://www.youtube.com/watch?v=${movieTrailer[0].key}`}>
              &#8231; <i className="fas fa-play" /> Play Trailer
            </a>
          ) : null}
        </p>
      ) : null}
      <p>Release Date: {release_date}</p>
      {crew
        ? crew.forEach(function(entry) {
            if (entry.job === "Director") {
              directors.push(entry.name);
            }
          })
        : null}
      <p>Directed By: {directors.join(", ")}</p>
      <p>
        <i className="fa fa-money-bill-alt" /> Budget: {convertMoney(budget)}
      </p>
      <p>
        <i className="fa fa-ticket-alt" /> Revenue: {convertMoney(revenue)}
      </p>
    </div>
  );
};
export default MovieInfoText;
