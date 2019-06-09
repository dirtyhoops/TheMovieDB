import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Spinner from "../Spinner/Spinner";
import Actor from "./Actor";

class Actors extends Component {
  render() {
    // deconstruct cast from the props
    const { cast } = this.props;
    console.log("cast is ", cast);

    if (cast) {
      return (
        <div className="container-fluid">
          <h4>top billed casts</h4>
          <div className="row no-gutters py-3">
            {cast.slice(0, 10).map(actor => (
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

export default connect(null)(Actors);
