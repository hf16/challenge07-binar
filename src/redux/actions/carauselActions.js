import { GET_CARAUSEL_MOVIE} from "../types";
import axios from "axios";

export const getCarauselMovie = () => async (dispatch) => {
    try {
      // Imagize we get data from API (the variable is users)
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}`
      );

      const alldata = data.results;
// // Jumlah variasi slide yang ditampilkan sebanyak 3 movie
      const filter = alldata.slice(0, 3);
      const hasilCarausel = filter.reverse();

    
  
      // Dispatch to reducers
      dispatch({
        type: GET_CARAUSEL_MOVIE,
        payload: hasilCarausel,
      });
    } catch (error) {
      throw error;
    }
  };

