import {GET_LIST_MOVIE, SEARCH_MOVIE} from "../types";
import axios from "axios";

export const getListMovie = () => async (dispatch) => {
    try {
      // Imagize we get data from API (the variable is users)
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&language=en-US&sort_by=popularity.desc`
              
      );

      const alldata = data.results;
      const hasilListMovie = alldata.slice(0, 14);

      // Dispatch to reducers
      dispatch({
        type: GET_LIST_MOVIE,
        payload: hasilListMovie,
      });
    } catch (error) {
      throw error;
    }
  };


  //search
  export const searchMovie = (searchTerm) => async (dispatch) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${searchTerm}&page=1&sort_by=popularity.desc`
      );
      const hasilSearch= data.results.slice(0, 14);
        console.log("aku di action search")
      dispatch({
        type: SEARCH_MOVIE,
        payload: hasilSearch,
      });
    } catch (error) {
      throw error;
    }
  };