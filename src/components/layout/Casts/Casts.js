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
          <div className="header-casts">
            <h2>Top Billed Cast</h2>
          </div>

          <div className="row justify-content-center no-gutters">
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
