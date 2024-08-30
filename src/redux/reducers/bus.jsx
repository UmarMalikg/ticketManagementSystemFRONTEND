import {
  TOTAL_BUSSES_REQUEST,
  TOTAL_BUSSES_REQUEST_SUCCESS,
  TOTAL_BUSSES_REQUEST_FAILURE,
} from "../constants/bus";

// Initial state
const initialState = {
  total: null,
  loading: false,
  error: null,
};

// Reducer function
const bussesReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOTAL_BUSSES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case TOTAL_BUSSES_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        total: action.payload,
      };
    case TOTAL_BUSSES_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default bussesReducer;
