import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import PersonMovie from "./PersonMovie";
import "./PersonMovies.css";

class PersonMovies extends Component {
  render() {
    const { selectedPersonMovies } = this.props;
    if (selectedPersonMovies) {
      return (
        <div className="wrapper-personmovies container-fluid">
          <div className="personmovie-header">
            <h2>Movie Roles</h2>
          </div>
          <div className="row no-gutters px-1">
            {selectedPersonMovies.map(personMovie => (
              <PersonMovie key={personMovie.id} personMovie={personMovie} />
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

PersonMovies.propTypes = {
  selectedPersonMovies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  selectedPersonMovies: state.movie.selectedPersonMovieCredits
});

export default connect(mapStateToProps)(PersonMovies);
