import React, { Component } from "react";
import PropTypes from "prop-types";
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

    return (
      <div className="thewholewrapperwithbackgroundandbigraphy">
        <div
          className="wrapper-personinfobox"
          style={{
            background: selectedPersonMovies[5]
              ? `url(https://image.tmdb.org/t/p/original/${
                  selectedPersonMovies[5].backdrop_path
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
                Known Credits: <span>15</span>
              </p>
              <p>
                Popularity: <span>{popularity}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="wrapper-biography">
          <h2>Biography: </h2>
          <p>{biography}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedPerson: state.movie.selectedPerson,
  selectedPersonMovies: state.movie.selectedPersonMovieCredits
});

export default connect(mapStateToProps)(PersonInfoBox);

{
  /* use this for hero image */
}
