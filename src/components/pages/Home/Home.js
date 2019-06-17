import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getMovies,
  loadMoreMovies,
  getHeroImage,
  getGenres
} from "../../../actions/movieActions";

import HeroImage from "../../layout/HeroImage/HeroImage";
import SearchBar from "../../layout/SearchBar/SearchBar";
import NavBar from "../../layout/NavBar/NavBar";
import { apiKey } from "../../../config";

import Movies from "../../layout/Movies/Movies";
import MoreButton from "../../layout/MoreButton/MoreButton";

import "./Home.css";

// // @TODO:
//   2. make the rating after the title in the hero image PRETTIER, maybe the styling like TMDB
//   5. make a better spinner and make sure everthing that needs to load have an if statement if its not loading, load the spinner
//   6. put an if statement if currentPage < totalPages === display the button, else, hide it
//   7. make sure to check if the searchterm result totalpage is less than the total page, and make sure the endpoint is right -- this is for searched movies, make sure to change the total page number
//   9. make the navigation PRETTIER

//   11. make the MOVIEDETAILPAGE PRETTIER
//   12. maybe clean up the actors page and the movieinfotext. maybe change the const props and make it a class component
//   15. ADD SOME JQUERY (HOVER ON MOVIES, DISPLAY THE TITLE, RATINGS, AND MAYBE THE OVERVIEW)
//   16. FIX THE MOVIE HEADER WHEN A USER SELECT A GENRE

//   15. MAKE THE NAVBAR, SEARCHBAR STAYS ON TOP OF THE PAGE WHEN THE USER SCROLLS DOWN. SO BASICALLY TAKE OUT THE HEROIMAGE

class Home extends Component {
  //do the dispatch right here with the movie
  state = {
    searchKeyword: "",
    movieHeader: "Popular Movies"
  };

  componentDidMount() {
    this.props.getMovies(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=20`
    );
    this.props.getHeroImage();
    this.props.getGenres();
  }

  //TRY TO HAVE THIS IN A CASE OR IF STATEMENT, IF SOMETHING IS CLICK THEN IT'S DIFFERENT ENDPOINT

  selectGenre = genre => {
    this.props.getMovies(
      `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&with_genres=${genre}&page=1`
    );
    this.setState({ movieHeader: "SELECTED GENRRE FIX THIS LATER" });
  };

  selectPopularMovies = () => {
    this.props.getMovies(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    );
    this.setState({ movieHeader: "Popular Movies" });
  };

  selectUpcomingMovies = () => {
    this.props.getMovies(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`
    );
    this.setState({ movieHeader: "Upcoming Movies" });
  };

  selectPlayingNow = () => {
    this.props.getMovies(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`
    );
    this.setState({ movieHeader: "Movies Playing in Threatres" });
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
    this.setState({ movieHeader: this.state.searchKeyword });
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
          <NavBar
            onGenreClick={this.selectGenre}
            onUpcomingClick={this.selectUpcomingMovies}
            onPopularClick={this.selectPopularMovies}
            onPlayingNowClick={this.selectPlayingNow}
          />
          <HeroImage />
          <SearchBar
            callback={this.searchMovies}
            onGenreClick={this.selectGenre}
          />
          {/* <NavBar /> */}
          <Movies movieHeader={this.state.movieHeader} />
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
  { getMovies, loadMoreMovies, getHeroImage, getGenres }
)(Home);
