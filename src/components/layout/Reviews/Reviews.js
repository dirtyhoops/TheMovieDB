import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./Reviews.css";

class Reviews extends Component {
  render() {
    const { results } = this.props.reviews;

    if (results) {
      return (
        <div className="container-fluid wrapper-reviews">
          <div className="header-reviews">
            <h2>Movie Reviews</h2>
            <hr />
          </div>
          <div className="reviews-content">
            {results.map((review, index) => (
              <div key={index} className="individual-review">
                <h6>A review by {review.author}</h6>
                <p>{review.content}</p>
                <hr />
              </div>
            ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Reviews.propTypes = {
  result: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  reviews: state.movie.movieReviews
});

export default connect(mapStateToProps)(Reviews);
