import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../Spinner/Spinner";

import Movie from "./Movie";
import "./Movies.css";

class Movies extends Component {
  render() {
    // deconstruct movies from the props
    const { movies } = this.props;

    if (movies) {
      return (
        <div className="container-fluid">
          <div className="movies-header">
            <h2>{this.props.movieHeader}</h2>
          </div>
          <div className="row no-gutters px-3">
            {movies.map(movie => (
              <Movie key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Movies.propType = {
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.movie.movies
});

export default connect(mapStateToProps)(Movies);
