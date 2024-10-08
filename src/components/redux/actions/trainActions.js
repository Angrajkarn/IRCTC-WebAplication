// Actions for setting train data and booking details

export const SET_TRAIN_RESULTS = 'SET_TRAIN_RESULTS';
export const SET_BOOKING_DETAILS = 'SET_BOOKING_DETAILS';

export const setTrainResults = (results) => ({
  type: SET_TRAIN_RESULTS,
  payload: results
});

export const setBookingDetails = (details) => ({
  type: SET_BOOKING_DETAILS,
  payload: details
});
