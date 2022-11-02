import { combineReducers } from "redux";
import carauselReducer from "./carauselReducer";
import listMovieReducer from "./listMovieReducer"
import detailReducer from "./detailReducer";


// We have reducers, it will called in store to create an global state
export default combineReducers({
  carausel: carauselReducer,
  movie: listMovieReducer,
  detail:detailReducer,

  

});