import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import "./HeroImage.css";

class HeroImage extends Component {
  render() {
    const {
      backdrop_path,
      title,
      overview,
      vote_average,
      id
    } = this.props.heroImage;

    return (
      <Link to={`movie/${id}`}>
        <div
          className="wrapper-heroimage"
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)
          39%,rgba(0,0,0,0)
          41%,rgba(0,0,0,0.65)
          100%),
          url(https://image.tmdb.org/t/p/original${backdrop_path})`
          }}
        >
          <div className="wrapper-heroimage-content">
            <div className="wrapper-heroimage-text">
              <h1>
                {title} ({vote_average}
                <span>
                  <i className="fas fa-star" />
                </span>
                )
              </h1>
              <p>{overview}</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

HeroImage.propTypes = {
  heroImage: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  heroImage: state.movie.heroImage
});

export default connect(mapStateToProps)(HeroImage);
