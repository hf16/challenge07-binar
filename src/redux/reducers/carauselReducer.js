import {GET_CARAUSEL_MOVIE} from "../types";

// The initial state when the application load in first time
const initialState = {
  carausels: [],
};

// This function will be triggered when any action dispatching
const carauselReducer = (state = initialState, action) => {
  console.log("aku di carausel");
  switch (action.type) {
    case GET_CARAUSEL_MOVIE:
      return {
        ...state,
        carausels: action.payload,
      };
    
    default:
      return state;
  }
};

export default carauselReducer;