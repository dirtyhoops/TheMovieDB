import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Spinner from "../Spinner/Spinner";
import Cast from "./Cast";
import "./Cast.css";

class Casts extends Component {
  render() {
    // deconstruct cast from the props
    const { casts } = this.props;

    if (casts) {
      return (
        <div className="container-fluid wrapper-actors">
          <h3>Top Billed Cast</h3>
          <div className="row justify-content-center no-gutters my-3">
            {casts.slice(0, 10).map(cast => (
              <Cast key={cast.id} cast={cast} />
            ))}
          </div>
        </div>
      );
    } else {
      return <Spinner />;
    }
  }
}

Casts.propType = {
  cast: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  casts: state.movie.movieCredits.cast
});

export default connect(mapStateToProps)(Casts);
