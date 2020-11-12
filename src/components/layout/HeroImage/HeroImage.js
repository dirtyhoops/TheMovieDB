import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './HeroImage.css';

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
          className='wrapper-heroimage'
          style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0.40)
          45%,rgba(0,0,0,0.40)
          20%,rgba(0,0,0,0.90)
          100%),
          url(https://image.tmdb.org/t/p/original${backdrop_path})`
          }}
        >
          <div className='heroimage-content container'>
            <div className='heroimage-text'>
              <div className='heroimage-text-flex'>
                <p className='heroimage-text-title'>{title}</p>
                <p className='heroimage-text-average'>
                  {vote_average}
                  <span className='span-star3'>
                    <i className='far fa-star' />
                  </span>
                </p>
              </div>
              <p className='heroimage-text-overview'>{overview}</p>
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
