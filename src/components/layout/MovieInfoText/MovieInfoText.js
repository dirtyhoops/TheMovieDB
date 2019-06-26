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

  return (
    <div className="movieinfobox-text">
      <h1>
        {title} ({vote_average}
        <i className="fas fa-star" />)
      </h1>
      <div className="genreTestingdeletethislater">
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
            <i className="far fa-clock" /> {calcTime(runtime)} &#8231;{" "}
            <i className="fas fa-play" /> Play Trailer
          </p>
        ) : null}
        <p>Release Date: {release_date}</p>
        <p>Directed By: Gonna Fix This</p>
        <p>
          <i className="fa fa-money-bill-alt" /> Budget: {convertMoney(budget)}
        </p>
        <p>
          <i className="fa fa-ticket-alt" /> Revenue: {convertMoney(revenue)}
        </p>
      </div>
    </div>
  );
};
export default MovieInfoText;
