import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  getPerson,
  getPersonMovieCredits
} from "../../../actions/movieActions";

import NavBar from "../../layout/NavBar/NavBar";
import PersonInfoBox from "../../layout/PersonInfoBox/PersonInfoBox";
import PersonMovies from "../../layout/PersonMovies/PersonMovies";
import "./PersonProfile.css";

class PersonProfile extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getPerson(id);
    this.props.getPersonMovieCredits(id);
  }

  render() {
    return (
      <div className="wrapper-personprofile">
        <NavBar />
        <div>
          <p>Go back to movie</p>
        </div>
        <PersonInfoBox />
        <PersonMovies />
      </div>
    );
  }
}

PersonProfile.propTypes = {
  getPerson: PropTypes.func,
  getPersonMovieCredits: PropTypes.func
};

export default connect(
  null,
  { getPerson, getPersonMovieCredits }
)(PersonProfile);
