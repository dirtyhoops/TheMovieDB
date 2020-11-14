import React, { Component } from 'react';
import { connect } from 'react-redux';

import './PersonInfoBox.css';

class PersonInfoBox extends Component {
  render() {
    const {
      profile_path,
      name,
      known_for_department,
      birthday,
      gender,
      biography,
      popularity,
      place_of_birth
    } = this.props.selectedPerson;

    const { selectedPersonMovies } = this.props;
    const { selectedMovie } = this.props;

    return (
      <div className='personinfobox-wrapper'>
        <div className='personinfobox-content container'>
          <div className='personinfobox-content-poster'>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w342${profile_path}`
                  : '/images/posternotfound.png'
              }
              alt='person_profile_image'
            />
          </div>

          <div className='personinfobox-content-info'>
            <p className='personinfobox-text-name'>{name}</p>
            <p className='personinfobox-text-info'>
              Known For: <span>{known_for_department}</span>
            </p>
            <p className='personinfobox-text-info'>
              Gender: <span>{gender === 1 ? 'Female' : 'Male'}</span>
            </p>
            <p className='personinfobox-text-info'>
              Birthday: <span>{birthday}</span>
            </p>
            <p className='personinfobox-text-info'>
              Place of Birth: <span>{place_of_birth}</span>
            </p>
            <p className='personinfobox-text-info'>
              Known Movie Credits:{' '}
              <span>
                {selectedPersonMovies ? selectedPersonMovies.length : null}
              </span>
            </p>

            {biography !== '' ? (
              <div className='wrapper-biography'>
                <p className='personinfobox-text-biographyheader'>Biography </p>
                <p className='personinfobox-text-biography'>{biography}</p>
              </div>
            ) : null}
          </div>
        </div>
        {biography !== '' ? (
          <div className='wrapper-biography-small'>
            <p className='personinfobox-text-biographyheader'>Biography </p>
            <p className='personinfobox-text-biography'>{biography}</p>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  selectedPerson: state.movie.selectedPerson,
  selectedPersonMovies: state.movie.selectedPersonMovieCredits,
  selectedMovie: state.movie.selectedMovie
});

export default connect(mapStateToProps)(PersonInfoBox);
