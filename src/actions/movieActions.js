import {
  GET_MOVIES,
  GET_MOVIE,
  GET_HERO_IMAGE,
  GET_MOVIE_CREDITS,
  GET_SIMILAR_MOVIES,
  LOAD_MORE_MOVIES,
  GET_GENRES,
  GET_MOVIE_REVIEWS,
  GET_PERSON,
  GET_PERSON_MOVIE_CREDITS,
  GET_MOVIE_TRAILER_LINK
} from "./types";
import axios from "axios";

import { API_URL, apiKey } from "../config";

export const getMovies = endpoint => async dispatch => {
  const res = await axios.get(endpoint);
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
};

export const loadMoreMovies = endpoint => async dispatch => {
  const res = await axios.get(endpoint);
  dispatch({
    type: LOAD_MORE_MOVIES,
    payload: res.data
  });
};

export const getMovie = id => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
  );
  dispatch({
    type: GET_MOVIE,
    payload: res.data
  });
};

export const getHeroImage = () => async dispatch => {
  const res = await axios.get(
    `${API_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  );
  const randomNum = Math.floor(Math.random() * 15);

  dispatch({
    type: GET_HERO_IMAGE,
    payload: res.data.results[randomNum]
  });
};

export const getMovieCredits = id => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  );
  dispatch({
    type: GET_MOVIE_CREDITS,
    payload: res.data
  });
};

export const getSimilarMovies = id => async dispatch => {
  const res = await axios.get(
    `${API_URL}/movie/${id}/similar?api_key=${apiKey}`
  );
  dispatch({
    type: GET_SIMILAR_MOVIES,
    payload: res.data.results
  });
};

export const getGenres = () => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
  );
  dispatch({
    type: GET_GENRES,
    payload: res.data.genres
  });
};

export const getMovieReviews = id => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}`
  );
  dispatch({
    type: GET_MOVIE_REVIEWS,
    payload: res.data
  });
};

export const getPerson = id => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${apiKey}`
  );
  dispatch({
    type: GET_PERSON,
    payload: res.data
  });
};

export const getPersonMovieCredits = id => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${apiKey}`
  );
  dispatch({
    type: GET_PERSON_MOVIE_CREDITS,
    payload: res.data.cast
  });
};

export const getSelectedMovieTrailerLink = id => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
  );
  dispatch({
    type: GET_MOVIE_TRAILER_LINK,
    payload: res.data.results
  });
};
