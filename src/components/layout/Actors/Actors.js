import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Spinner/Spinner";
import Actor from "./Actor";
import "./Actor.css";

class Actors extends Component {
  render() {
    // deconstruct cast from the props
    const { casts } = this.props;

    if (casts) {
      console.log("cast is ", casts);
      return (
        <div className="container-fluid wrapper-actors">
          <h4>Top Billed Cast</h4>
          <div className="row justify-content-center no-gutters my-3">
            {casts.slice(0, 10).map(actor => (
              <Actor key={actor.id} actor={actor} />
            ))}
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Actors.propType = {
  cast: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  casts: state.movie.movieCredits.cast
});

export default connect(mapStateToProps)(Actors);
