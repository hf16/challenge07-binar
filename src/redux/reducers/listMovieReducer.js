import {GET_LIST_MOVIE, SEARCH_MOVIE} from "../types";

// The initial state when the application load in first time
const initialState = {
  movies: [],
  // searchs:[],
};

// This function will be triggered when any action dispatching
const listMovieReducer = (state = initialState, action) => {
  console.log("aku di Reducer List Movie");
  switch (action.type) {
    case GET_LIST_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload,
      }

    default:
      return state;
  }
};

export default listMovieReducer;