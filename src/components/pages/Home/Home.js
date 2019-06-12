import React, { Component } from "react";
import HeroImage from "../../layout/HeroImage/HeroImage";
import SearchBar from "../../layout/SearchBar/SearchBar";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getMovies } from "../../../actions/movieActions";

import Movies from "../../movies/Movies";

import "./Home.css";

class Home extends Component {
  //do the dispatch right here with the movie
  state = {
    search: ""
  };

  componentDidMount() {
    const apiKey = process.env.REACT_APP_THEMOVIEDB_API;
    var endpoint = "";
    if (this.state.search === "") {
      endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;
    } else {
      endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
    }

    this.props.getMovies(endpoint);
  }

  render() {
    return (
      <React.Fragment>
        <div className="wrapper-home">
          <HeroImage />
          <SearchBar />
          {/* <NavBar /> */}
          <Movies />
        </div>
      </React.Fragment>
    );
  }
}

Home.propType = {
  getMovies: PropTypes.func.isRequired
};

//@@@@@@@@@@@@@@@ i might need this later, but right now i dont since i dont need the movies[] here
// const mapStateToProps = state => ({
//   movies: state.movie.movies
// });

export default connect(
  null,
  { getMovies }
)(Home);
