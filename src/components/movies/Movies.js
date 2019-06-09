import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../../actions/movieActions";

import Movie from "./Movie";

class Movies extends Component {
  componentDidMount() {
    this.props.getMovies();
  }

  render() {
    // deconstruct movies from the props
    const { movies } = this.props;

    return (
      <div className="container-fluid testbackground">
        <div className="row no-gutters py-3">
          {movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

Movies.propType = {
  movies: PropTypes.array.isRequired,
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.movie.movies
});

export default connect(
  mapStateToProps,
  { getMovies }
)(Movies);
