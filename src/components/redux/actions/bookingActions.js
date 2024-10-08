export const SET_BOOKING_DETAILS = 'SET_BOOKING_DETAILS';
export const UPDATE_FORM_DATA = 'UPDATE_FORM_DATA';

export const setBookingDetails = (details) => ({
  type: SET_BOOKING_DETAILS,
  payload: details,
});

export const updateFormData = (formData) => ({
  type: UPDATE_FORM_DATA,
  payload: formData,
});
export const setTrainDetails = (details) => ({
  type: 'SET_TRAIN_DETAILS',
  payload: details,
});