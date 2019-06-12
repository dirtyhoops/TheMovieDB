import {
  GET_MOVIES,
  GET_MOVIE,
  GET_MOVIE_IMAGES,
  GET_HERO_IMAGE,
  GET_MOVIE_CREDITS,
  GET_SIMILAR_MOVIES,
  LOAD_MORE_MOVIES
} from "./types";
import axios from "axios";

import { API_URL, apiKey } from "../config";

export const getMovies = endpoint => async dispatch => {
  // const res = await axios.get(
  //   `${API_URL}/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  // );

  const res = await axios.get(endpoint);
  dispatch({
    type: GET_MOVIES,
    payload: res.data
  });
  console.log("movie whole json result, ", res.data);
};

export const loadMoreMovies = endpoint => async dispatch => {
  const res = await axios.get(endpoint);
  dispatch({
    type: LOAD_MORE_MOVIES,
    payload: res.data
  });
  console.log(
    "movie whole json result after hitting load more movies, ",
    res.data
  );
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

export const getMovieImages = id => async dispatch => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${apiKey}`
  );
  dispatch({
    type: GET_MOVIE_IMAGES,
    payload: res.data.posters
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
