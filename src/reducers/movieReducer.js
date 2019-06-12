import {
  GET_MOVIES,
  GET_MOVIE,
  GET_MOVIE_IMAGES,
  GET_HERO_IMAGE,
  GET_MOVIE_CREDITS,
  GET_SIMILAR_MOVIES,
  LOAD_MORE_MOVIES
} from "../actions/types";

//gonna see if the currentpage,totalpages,searchterm is gonna work
const initialState = {
  movies: [],
  selectedMovie: {},
  selectedMovieImages: [],
  heroImage: {},
  movieCredits: {},
  similarMovies: [],
  currentPage: 0,
  totalPages: 0
};

// maybe make the selectedMovieImages an ARRAY

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload.results,
        totalPages: action.payload.total_pages,
        currentPage: action.payload.page
      };
    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload.results],
        currentPage: action.payload.page
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
