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
    return (
      <div className="wrapper-personinfobox">
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
            <p>
              Biography: <span>{biography}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedPerson: state.movie.selectedPerson
});

export default connect(mapStateToProps)(PersonInfoBox);
