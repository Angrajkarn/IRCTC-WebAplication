import { SET_TRAIN_RESULTS, SET_BOOKING_DETAILS } from '../actions';

const initialState = {
  results: [],
  bookingDetails: {}
};

const trainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TRAIN_RESULTS:
      return { ...state, results: action.payload };
    case SET_BOOKING_DETAILS:
      return { ...state, bookingDetails: action.payload };
    default:
      return state;
  }
};

export default trainReducer;
