import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './Reviews.css';

class Reviews extends Component {
  render() {
    const { results } = this.props.reviews;

    if (results) {
      return (
        <div className='reviews-wrapper container'>
          <div className='reviews-header'>
            <p>Movie Reviews</p>
          </div>
          <div className='reviews-content'>
            {results.length > 0 ? (
              results.map((review, index) => (
                <div key={index} className='review-flex'>
                  <div className='review-flex-left'>
                    <p className='review-text-name'>{review.author}</p>
                    <div className='reviewer-square'></div>
                  </div>
                  <div className='review-flex-right'>
                    <p className='review-text-review'>{review.content}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>This movie has currently no reviews</p>
            )}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Reviews.propTypes = {
  result: PropTypes.array
};

const mapStateToProps = state => ({
  reviews: state.movie.movieReviews
});

export default connect(mapStateToProps)(Reviews);
