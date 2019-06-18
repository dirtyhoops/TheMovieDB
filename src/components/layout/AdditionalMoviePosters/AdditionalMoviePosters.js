import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./AdditionalMoviePosters.css";

class AdditionalMoviePosters extends Component {
  render() {
    const { posters } = this.props;
    return (
      <div className="wrapper-additionalPosters">
        <div className="row">
          {posters.slice(0, 10).map((poster, index) => (
            <div key={index} className="col col-md-3">
              <div className="additionalPosterImg">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/original${poster.file_path}`}
                  alt="poster-img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

AdditionalMoviePosters.propTypes = {
  selectedMovieImages: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  posters: state.movie.selectedMovieImages
});

export default connect(mapStateToProps)(AdditionalMoviePosters);
