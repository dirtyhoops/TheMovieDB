import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Actor extends Component {
  render() {
    const { id, character, name, profile_path } = this.props.actor;

    return (
      <div className="col-4 col-sm-4 col-md-3 col-lg-2">
        <div className="card">
          <img
            className="card-img-top"
            src={`https://image.tmdb.org/t/p/original${profile_path}`}
            alt="poster image"
          />
          <div className="card-body">
            <p className="card-text">{name}</p>
          </div>
        </div>
      </div>
    );
  }
}

Actor.propTypes = {
  actor: PropTypes.object.isRequired
};

export default connect(null)(Actor);
