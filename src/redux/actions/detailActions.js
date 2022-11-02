import {GET_DETAIL_MOVIE} from "../types";
import axios from "axios";


  //detail
  export const detailMovie = (mediaType, id) => async (dispatch) => {
    try {
        const { data } = await axios.get(` 
        https://api.themoviedb.org/3/${mediaType}/${id}?api_key=${process.env.REACT_APP_API_KEY}&page=1`);
        

        console.log("aku di Action DETAIL")
      dispatch({
        type: GET_DETAIL_MOVIE,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };


 