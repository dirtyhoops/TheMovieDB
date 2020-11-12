import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../Spinner/Spinner';
import Cast from './Cast';
import './Cast.css';

class Casts extends Component {
  render() {
    // deconstruct cast from the props
    const { casts } = this.props;

    if (casts) {
      return (
        <div className='actors-wrapper'>
          <div className='actors-container container'>
            <div className='actors-header'>
              <p>TOP BILLED CAST</p>
            </div>

            <div className='actors-grid'>
              {casts.slice(0, 10).map(cast => (
                <Cast key={cast.id} cast={cast} />
              ))}
              <div className='actors-grid-box-spacer'></div>
              <div className='actors-grid-box-spacer'></div>
              <div className='actors-grid-box-spacer'></div>
              <div className='actors-grid-box-spacer'></div>
            </div>
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
