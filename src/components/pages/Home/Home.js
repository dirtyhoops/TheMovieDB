import React, { Component } from "react";
import HeroImage from "../../layout/HeroImage/HeroImage";
import SearchBar from "../../layout/SearchBar/SearchBar";
import Grid from "../../layout/Grid/Grid";
import "./Home.css";

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

export default Home;
