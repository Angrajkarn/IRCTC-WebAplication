import { SET_BOOKING_DETAILS, UPDATE_FORM_DATA } from '../actions/bookingActions';

const initialState = {
  selectedClass: { className: '', fair: 0 },
  trainDetails: null,
   fair: null,
  formData: {
    travelers: [{ passengerName: '', age: '', gender: '', berthPreference: 'No Preference' }],
    contactNumber: '',
    email: '',
    travelInsurance: 'Yes',
  }
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING_DETAILS:
      return {
        ...state,
        selectedClass: action.payload.selectedClass || initialState.selectedClass,  // Default to initial if not provided
        trainDetails: action.payload.trainDetails || initialState.trainDetails,    // Default to null if not provided
        fair: action.payload.fair ?? initialState.fair,   // Use nullish coalescing to handle 0 value correctly
      };

    case UPDATE_FORM_DATA:
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.payload,
        }
      };

    default:
      return state;
  }
};

export default bookingReducer;
