import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import PropTypes from "prop-types";

class NavBar extends Component {
  render() {
    const { genres } = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 sticky-top">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            TheMovieDB
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" /> Home
                </Link>
              </li>

              {this.props.onUpcomingClick ? (
                <li
                  className="nav-item"
                  onClick={() => this.props.onUpcomingClick()}
                >
                  <a className="nav-link">
                    <i className="fas fa-calendar-times" /> Upcoming Movies
                  </a>
                </li>
              ) : null}

              {this.props.onPopularClick ? (
                <li
                  className="nav-item"
                  onClick={() => this.props.onPopularClick()}
                >
                  <a className="nav-link">
                    <i className="fas fa-star" /> Popular Movies
                  </a>
                </li>
              ) : null}

              {this.props.onGenreClick ? (
                <li>
                  <div class="nav-item dropdown">
                    <a
                      href="#"
                      class="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      <i className="fas fa-film" /> Select a Genre
                    </a>
                    <div className="dropdown-menu">
                      {genres.map((genre, index) => (
                        <li
                          key={index}
                          onClick={() => this.props.onGenreClick(genre.id)}
                          className="dropdown-item"
                        >
                          {genre.name}
                        </li>
                      ))}
                    </div>
                  </div>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

NavBar.propType = {
  genres: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  genres: state.movie.movieGenres
});

export default connect(mapStateToProps)(NavBar);
