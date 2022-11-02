import {GET_DETAIL_MOVIE} from "../types";

// The initial state when the application load in first time
const initialState = {
  details: [],
};

// This function will be triggered when any action dispatching
const detailReducer = (state = initialState, action) => {
  console.log("aku di Detail Reducer");
  switch (action.type) {
    case GET_DETAIL_MOVIE:
      return {
        ...state,
        details: action.payload,
      };
    
    default:
      return state;
  }
};

export default detailReducer;