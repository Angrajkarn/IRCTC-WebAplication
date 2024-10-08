import { createSelector } from 'reselect';

// Assuming your state structure
const selectBooking = (state) => state.booking;

export const selectTrainDetails = createSelector(
  [selectBooking],
  (booking) => booking.trainDetails
);

export const selectFormData = createSelector(
  [selectBooking],
  (booking) => booking.formData
);
