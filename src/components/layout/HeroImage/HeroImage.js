import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getHeroImage } from "../../../actions/movieActions";

import "./HeroImage.css";

class HeroImage extends Component {
  componentDidMount() {
    this.props.getHeroImage();
  }

  render() {
    const {
      backdrop_path,
      title,
      overview,
      vote_average
    } = this.props.heroImage;

    return (
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
              <i className="fas fa-star" />)
            </h1>
            <p>{overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

HeroImage.propTypes = {
  heroImage: PropTypes.object.isRequired,
  getHeroImage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  heroImage: state.movie.heroImage
});

export default connect(
  mapStateToProps,
  { getHeroImage }
)(HeroImage);
