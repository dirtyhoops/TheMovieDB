import {
  GET_MOVIES,
  GET_MOVIE,
  GET_MOVIE_IMAGES,
  GET_HERO_IMAGE,
  GET_MOVIE_CREDITS,
  GET_SIMILAR_MOVIES
} from "../actions/types";

const initialState = {
  movies: [],
  selectedMovie: {},
  selectedMovieImages: [],
  heroImage: {},
  movieCredits: {},
  similarMovies: []
};

// maybe make the selectedMovieImages an ARRAY

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      };
    case GET_MOVIE_IMAGES:
      return {
        ...state,
        selectedMovieImages: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        selectedMovie: action.payload
      };
    case GET_HERO_IMAGE:
      return {
        ...state,
        heroImage: action.payload
      };
    case GET_MOVIE_CREDITS:
      return {
        ...state,
        movieCredits: action.payload
      };
    case GET_SIMILAR_MOVIES:
      return {
        ...state,
        similarMovies: action.payload
      };

    default:
      return state;
  }
}
