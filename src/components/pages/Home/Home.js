import React, { Component } from "react";
import HeroImage from "../../layout/HeroImage/HeroImage";
import SearchBar from "../../layout/SearchBar/SearchBar";
import { apiKey } from "../../../config";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getMovies,
  loadMoreMovies,
  getHeroImage
} from "../../../actions/movieActions";

import Movies from "../../movies/Movies";
import MoreButton from "../../layout/MoreButton/MoreButton";

import "./Home.css";

// // @TODO:
//   2. make the rating after the title in the hero image PRETTIER, maybe the styling like TMDB
//   3. move the movies(rename it Movies) folder inside layout
//   4. rename the Actors/Actor folder to Casts/Cast
//   5. make a better spinner and make sure everthing that needs to load have an if statement if its not loading, load the spinner
//   6. put an if statement if currentPage < totalPages === display the button, else, hide it
//   7. make sure to check if the searchterm result totalpage is less than the total page, and make sure the endpoint is right
//   9. make the navigation PRETTIER
//   10. add a genre inside the navbar and make a separate action for it with the endpoint with genre.
//   11. make the MOVIEDETAILPAGE PRETTIER
//   12. maybe clean up the actors page and the movieinfotext. maybe change the const props and make it a class component

class Home extends Component {
  //do the dispatch right here with the movie
  state = {
    searchKeyword: ""
  };

  componentDidMount() {
    this.props.getMovies(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=20`
    );
    this.props.getHeroImage();
  }

  searchMovies = searchKeyword => {
    let endpoint = "";
    this.setState({ searchKeyword });

    if (searchKeyword === "") {
      endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=2`;
    } else {
      endpoint = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchKeyword}`;
    }

    this.props.getMovies(endpoint);
  };

  loadMoreMovies = () => {
    let nextPage = parseInt(this.props.currentPage) + 1;
    let endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${nextPage}`;
    console.log(
      "current page in the redux state(starts with 20) is: ",
      parseInt(this.props.currentPage) + 1
    );

    this.props.loadMoreMovies(endpoint);
  };

  render() {
    return (
      <React.Fragment>
        <div className="wrapper-home">
          <HeroImage />
          <SearchBar callback={this.searchMovies} />
          {/* <NavBar /> */}
          <Movies />
          <MoreButton onClick={this.loadMoreMovies} />
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

const mapStateToProps = state => ({
  currentPage: state.movie.currentPage
});

export default connect(
  mapStateToProps,
  { getMovies, loadMoreMovies, getHeroImage }
)(Home);
