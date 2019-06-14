import React, { Component } from "react";
import HeroImage from "../../layout/HeroImage/HeroImage";
import SearchBar from "../../layout/SearchBar/SearchBar";
import GenreBar from "../../layout/GenreBar/GenreBar";
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
//   7. make sure to check if the searchterm result totalpage is less than the total page, and make sure the endpoint is right -- this is for searched movies, make sure to change the total page number
//   9. make the navigation PRETTIER
//   10. add a genre inside the navbar and make a separate action for it with the endpoint with genre.
//   11. make the MOVIEDETAILPAGE PRETTIER
//   12. maybe clean up the actors page and the movieinfotext. maybe change the const props and make it a class component
//   13. create a SimilarMovie class so we can add a key
//   14. make sure to put AppNavBar inside NavBar
//   15. ADD SOME JQUERY (HOVER ON MOVIES, DISPLAY THE TITLE, RATINGS, AND MAYBE THE OVERVIEW)

//   15. MAKE THE NAVBAR, SEARCHBAR STAYS ON TOP OF THE PAGE WHEN THE USER SCROLLS DOWN. SO BASICALLY TAKE OUT THE HEROIMAGE

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
// for genre bar, make an API call that calls all the genres, and the pass its ID and its NAME to the genrebar, and inside genrebar, make it <li> and then style it like a navigation bar, maybe a hiding navigation bar on the side

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

  selectGenre = genre => {
    let endpoint = `
    https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genre}&page=1`;

    this.props.getMovies(endpoint);
  };

  searchMovies = searchKeyword => {
    let endpoint = "";
    this.setState({ searchKeyword });

    if (searchKeyword === "") {
      endpoint = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`;
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
          <GenreBar onGenreClick={this.selectGenre} />
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
