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
//   3. make the rating after the title in the hero image PRETTIER, maybe the styling like TMDB
//   5. MAKE A BIG SPINNER THAT SAYS MOVIE IS LOADING. make a better spinner and make sure everthing that needs to load have an if statement if its not loading, load the spinner
//   16. FIX THE MOVIE HEADER WHEN A USER SELECT A GENRE
//   16. REMOVE UNNECESARY CSS FILES. delete them if there's nothing in them and remove the "import" too

class Home extends Component {
  //do the dispatch right here with the movie
  state = {
    searchKeyword: "",
    movieHeader: ""
  };

  componentDidMount() {
    this.selectPopularMovies();
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
          <Movies movieHeader={this.state.movieHeader} />
          {this.props.currentPage !== this.props.totalPages ? (
            <MoreButton onClick={this.loadMoreMovies} />
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

Home.propType = {
  getMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentPage: state.movie.currentPage,
  totalPages: state.movie.totalPages
});

export default connect(
  mapStateToProps,
  { getMovies, loadMoreMovies, getHeroImage, getGenres }
)(Home);
