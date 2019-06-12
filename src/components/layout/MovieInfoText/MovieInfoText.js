import React from "react";

import "./MovieInfoText.css";

const MovieInfoText = props => {
  const {
    title,
    overview,
    genres,
    production_countries,
    runtime,
    vote_average
  } = props.movieInfo;

  // figure out how to map it and why its console logging ran multiple times(5 this time)

  // console.log("genres are, ", genres);
  // if (genres) {
  //   const genreList = genres.map(genre => (
  //     <li key={genre.id}>{genre.name} </li>
  //   ));
  // }

  return (
    <div>
      <h1>
        {title} ({vote_average}
        <i className="fas fa-star" />)
      </h1>
      <p>
        US &#8231; Action &#8231;
        <span> </span>
        <i className="far fa-clock" /> {runtime} min
      </p>
      <p>{overview}</p>
    </div>
  );
};
export default MovieInfoText;
