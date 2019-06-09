import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "../../layout/Spinner/Spinner";

import HeroImage from "../../layout/HeroImage/HeroImage";
import NavBar from "../../layout/NavBar/NavBar";
import SearchBar from "../../layout/SearchBar/SearchBar";
import Grid from "../../layout/Grid/Grid";

import Movies from "../../movies/Movies";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrapper-home">
          <HeroImage />
          {/* <SearchBar /> */}
          {/* <NavBar /> */}
          <Grid />
        </div>
      </React.Fragment>
    );
  }
}

Home.propType = {
  getMovies: PropTypes.func.isRequired
};

export default connect(null)(Home);
