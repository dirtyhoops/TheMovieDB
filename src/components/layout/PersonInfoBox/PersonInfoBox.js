import React, { Component } from "react";
import { connect } from "react-redux";

import "./PersonInfoBox.css";

class PersonInfoBox extends Component {
  render() {
    const {
      profile_path,
      name,
      known_for_department,
      birthday,
      gender,
      biography,
      popularity,
      place_of_birth
    } = this.props.selectedPerson;

    const { selectedPersonMovies } = this.props;
    const { selectedMovie } = this.props;
    console.log("movie credits: ", selectedPersonMovies.length);

    return (
      <div className="thewholewrapperwithbackgroundandbigraphy">
        <div
          className="wrapper-personinfobox"
          style={{
            background: selectedMovie
              ? `url(https://image.tmdb.org/t/p/original/${
                  selectedMovie.backdrop_path
                })`
              : "#fff"
          }}
        >
          <div className="personinfo-content">
            <div className="personinfo-image">
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w342${profile_path}`
                    : "/images/posternotfound.png"
                }
                alt="person_profile_image"
              />
            </div>
            <div className="personinfo-texts">
              <h1>{name}</h1>
              <p>
                Known For: <span>{known_for_department}</span>
              </p>
              <p>
                Gender: <span>{gender === 1 ? "Female" : "Male"}</span>
              </p>
              <p>
                Birthday: <span>{birthday}</span>
              </p>
              <p>
                Place of Birth: <span>{place_of_birth}</span>
              </p>
              <p>
                Known Movie Credits:{" "}
                <span>
                  {selectedPersonMovies ? selectedPersonMovies.length : null}
                </span>
              </p>
              <p>
                Popularity: <span>{popularity}</span>
              </p>
            </div>
          </div>
        </div>
        {biography !== "" ? (
          <div className="wrapper-biography">
            <h2>Biography </h2>
            <p>{biography}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedPerson: state.movie.selectedPerson,
  selectedPersonMovies: state.movie.selectedPersonMovieCredits,
  selectedMovie: state.movie.selectedMovie
});

export default connect(mapStateToProps)(PersonInfoBox);
